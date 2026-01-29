import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admin Portal - DRW TRANS",
  description: "Admin dashboard untuk mengelola DRW TRANS",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {/* Full-width layout untuk desktop admin - TIDAK menggunakan mobile container */}
        <div className="min-h-screen w-full bg-gray-50">
          {children}
        </div>
      </body>
    </html>
  );
}
