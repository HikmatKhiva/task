import type { Metadata } from "next";
import "../assets/css/globals.css";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";
import { favicon } from "@/constant";
export const metadata: Metadata = {
  title: "DevOptima",
  description: "DevOptima",
  icons: {
    icon: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: favicon,
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary-black overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}