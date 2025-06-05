import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DownloadCVButton from "@/components/ui/DownloadCVButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Leonardo Collatto - Senior Software Engineer",
  description: "Professional portfolio by Leonardo Collatto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-black antialiased`}>
        {children}
        <DownloadCVButton />
      </body>
    </html>
  );
}
