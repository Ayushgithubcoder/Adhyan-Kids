import { NextResponse } from "next/server";
import { getMongoClient } from "@/lib/mongodb";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { parentName, phone, email, childName, childAge, program, message } = body;

    // Server-side validation
    if (!parentName || !phone || !childName || !childAge || !program) {
      return NextResponse.json(
        { message: "All required fields (Parent's Name, Phone, Child's Name, Age, and Program) must be filled." },
        { status: 400 }
      );
    }

    // Phone format validation (simple 10 digit check)
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (cleanPhone.length < 10) {
      return NextResponse.json(
        { message: "Please provide a valid 10-digit mobile number." },
        { status: 400 }
      );
    }

    // Child age validation
    const ageNum = parseFloat(childAge);
    if (isNaN(ageNum) || ageNum <= 0 || ageNum > 8) {
      return NextResponse.json(
        { message: "Please provide a realistic age for play school (between 1 and 8 years)." },
        { status: 400 }
      );
    }

    const inquiryData = {
      parentName,
      phone: cleanPhone,
      email: email || "N/A",
      childName,
      childAge: ageNum,
      program,
      message: message || "None",
      timestamp: new Date(),
    };

    // 1. Save to MongoDB
    try {
      const client = await getMongoClient();
      const db = client.db("adhyan-kidz");
      await db.collection("inquiries").insertOne(inquiryData);
      console.log(`[Database Save Success] Inquiry stored for child: ${childName}`);
    } catch (dbErr) {
      console.error("[Database Save Error]:", dbErr);
      // We do not block the submission if the DB connection is offline during setup
    }

    // 2. Send Telegram Phone Notification
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (botToken && chatId) {
      // Escape special markdown characters for Telegram MarkdownV2
      const escapeMarkdown = (text: string) => {
        return text.replace(/[_*\[\]()~`>#+\-=|{}.!]/g, "\\$&");
      };

      const textMessage = `🔔 *New Admission Inquiry\\!*
👤 *Parent:* ${escapeMarkdown(parentName)}
📞 *Phone:* ${escapeMarkdown(cleanPhone)}
📧 *Email:* ${escapeMarkdown(email || "N/A")}
👶 *Child:* ${escapeMarkdown(childName)} (${ageNum} yrs)
📚 *Program:* ${escapeMarkdown(program)}
💬 *Message:* ${escapeMarkdown(message || "None")}`;

      try {
        const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: textMessage,
            parse_mode: "MarkdownV2",
          }),
        });

        if (!tgRes.ok) {
          const tgErrText = await tgRes.text();
          console.error("[Telegram Bot Warning]: Send message failed:", tgErrText);
        } else {
          console.log("[Telegram Notification Success] Sent message alert to phone.");
        }
      } catch (tgErr) {
        console.error("[Telegram Notification Network Error]:", tgErr);
      }
    } else {
      console.warn("[Telegram Config Missing] TELEGRAM_BOT_TOKEN and/or TELEGRAM_CHAT_ID not set in env.");
    }

    return NextResponse.json(
      { message: "Inquiry successfully submitted! We will get in touch shortly." },
      { status: 200 }
    );
  } catch (err: any) {
    console.error(`[Inquiry API Error]`, err);
    return NextResponse.json(
      { message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
