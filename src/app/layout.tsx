import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DownloadCVButton from "@/components/ui/DownloadCVButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leonardo Collatto — Backend Software Engineer",
  description:
    "Backend engineer building reliable systems. Portfolio, side projects, and experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <div className="grain" aria-hidden />
        {children}
        <DownloadCVButton />
      </body>
    </html>
  );
}
