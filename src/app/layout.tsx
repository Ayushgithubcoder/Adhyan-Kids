import type { Metadata } from "next";
import { Fredoka, Quicksand } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Adhyan Kidz Play School | Best Preschool in Modipuram, Meerut",
  description: "Welcome to Adhyan Kidz Play School in Modipuram, Meerut. We provide a nurturing, creative, and safe environment for playgroup, nursery, LKG, and UKG kids. Enroll now!",
  keywords: ["Adhyan Kidz", "Play School Meerut", "Best Preschool Modipuram", "Adhyan Kidz Play School", "Nursery School Meerut", "Admissions Open 2026"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${quicksand.variable} h-full scroll-smooth antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark') {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="font-sans min-h-full flex flex-col bg-amber-50/30 text-slate-800 dark:bg-[#1A1108] dark:text-[#FFF5EB] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
