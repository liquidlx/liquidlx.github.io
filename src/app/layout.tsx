import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DownloadCVButton from "@/components/ui/DownloadCVButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Backend Software Engineer Portfolio",
  description:
    "Professional portfolio showcasing backend development expertise",
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
