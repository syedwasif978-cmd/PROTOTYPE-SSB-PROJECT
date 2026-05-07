import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata = {
  title: "Codex for Excel",
  description:
    "AI-powered Excel data extraction, calculation, and visualization chatbot."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
