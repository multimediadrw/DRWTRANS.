import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutWrapper from "./components/LayoutWrapper";
import StructuredData from "./components/StructuredData";
import GoogleAnalytics from "./components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DRW TRANS - Sewa Bus Pariwisata Bandung | PO Bus Terpercaya",
  description: "DRW TRANS adalah PO Bus terpercaya di Bandung. Melayani sewa bus pariwisata, HiAce, dan Medium Bus untuk perjalanan wisata, study tour, dan corporate trip ke seluruh Indonesia. Armada terawat, driver profesional, harga kompetitif.",
  keywords: [
    "sewa bus Bandung",
    "PO Bus Bandung",
    "rental bus pariwisata Bandung",
    "sewa HiAce Bandung",
    "bus wisata Bandung",
    "sewa bus murah Bandung",
    "sewa bus Jakarta",
    "rental bus study tour",
    "sewa bus corporate",
    "DRW TRANS",
  ],
  authors: [{ name: "DRW TRANS" }],
  creator: "DRW TRANS",
  publisher: "DRW TRANS",
  verification: {
    google: "HIpc7pz3LCVEu9G1FObhS2R2MPYcQ3l9v9dSY057ZDg",
  },
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
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://drwtrans.com",
    siteName: "DRW TRANS",
    title: "DRW TRANS - Sewa Bus Pariwisata Bandung | PO Bus Terpercaya",
    description: "DRW TRANS adalah PO Bus terpercaya di Bandung. Melayani sewa bus pariwisata, HiAce, dan Medium Bus untuk perjalanan wisata, study tour, dan corporate trip ke seluruh Indonesia.",
    images: [
      {
        url: "https://drwtrans.com/logo-drwtrans.png",
        width: 1200,
        height: 630,
        alt: "DRW TRANS - Sewa Bus Bandung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DRW TRANS - Sewa Bus Pariwisata Bandung",
    description: "PO Bus terpercaya di Bandung. Sewa bus pariwisata, HiAce, Medium Bus untuk wisata, study tour, corporate trip.",
    images: ["https://drwtrans.com/logo-drwtrans.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

  return (
    <html lang="id">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        {GA_MEASUREMENT_ID && <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />}
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
