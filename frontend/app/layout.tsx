import "./globals.css";
import { Fraunces, Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap"
});

export const metadata = {
  title: "AI Excel Chatbot Prototype",
  description:
    "A desktop-first, AI-powered Excel data entry and analysis chatbot prototype."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${fraunces.variable}`}>
        {children}
      </body>
    </html>
  );
}
