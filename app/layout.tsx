'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SplashScreen from "./components/SplashScreen";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DRW TRANS - Layanan Transportasi Premium",
  description: "Layanan sewa bus dan transportasi korporat terpercaya",
  manifest: "/manifest.json",
  themeColor: "#2E1065",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0, viewport-fit=cover",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DRW TRANS",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

function RootLayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  // Admin routes: no mobile container, no splash screen
  if (isAdminRoute) {
    return <>{children}</>;
  }

  // Regular routes: mobile container with splash screen
  return (
    <>
      <SplashScreen />
      {/* Desktop: Dark background with centered mobile container */}
      <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Mobile-Only Container (480px max) */}
        <div className="min-h-screen w-full max-w-[480px] mx-auto bg-white shadow-2xl overflow-hidden relative">
          {children}
        </div>
      </div>
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <RootLayoutContent>{children}</RootLayoutContent>
      </body>
    </html>
  );
}
