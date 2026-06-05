const fs = require("fs");
const path = require("path");
const { MongoClient } = require("mongodb");

try {
  const envPath = path.join(__dirname, ".env.local");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf-8");
    envContent.split("\n").forEach((line) => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let val = match[2] || "";
        if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
        process.env[key] = val.trim();
      }
    });
  }
} catch (e) {
  console.error("Error loading .env.local:", e.message);
}

async function listInquiries() {
  if (!process.env.MONGODB_URI) {
    console.error("MONGODB_URI not found in env.");
    return;
  }
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db("adhyan-kidz");
    const inquiries = await db.collection("inquiries").find({}).sort({ timestamp: -1 }).toArray();
    
    console.log("\n=== DATABASE INQUIRY ENTRIES ===");
    if (inquiries.length === 0) {
      console.log("No inquiries found in database yet. Go ahead and submit the form on the live site!");
    } else {
      inquiries.forEach((item, index) => {
        console.log(`\n[Inquiry #${index + 1}]`);
        console.log(`Parent Name: ${item.parentName}`);
        console.log(`Child Name : ${item.childName}`);
        console.log(`Child Age  : ${item.childAge} Years`);
        console.log(`Program    : ${item.program}`);
        console.log(`Phone      : ${item.phone}`);
        console.log(`Email      : ${item.email}`);
        console.log(`Message    : ${item.message}`);
        console.log(`Submitted  : ${item.timestamp}`);
      });
    }
  } catch (err) {
    console.error("Database connection failed:", err.message);
  } finally {
    await client.close();
  }
}

listInquiries();
