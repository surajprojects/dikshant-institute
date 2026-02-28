import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/header";
import Footer from "@/components/home/footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dikshant Institute",
  description:
    "Professional computer courses and academic coaching for 5th&#8722;10th standard students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className}`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex flex-1 justify-center bg-[#fffcfa]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
