import type { Metadata } from "next";
import { Archivo_Black, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFab from "@/components/WhatsAppFab";

const displayFont = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const bodyFont = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://magnafinishesglobal.com"),
  title: {
    default: "Magna Finishes Global Limited | Premium Paint Manufacturer, Lagos",
    template: "%s | Magna Finishes Global Limited",
  },
  description:
    "Magna Finishes Global Limited has manufactured premium architectural and industrial paints in Lagos since 2010. Get free colour consultation, request a quote, or find a stockist near you.",
  keywords: [
    "paint manufacturer Lagos",
    "Magna Finishes",
    "architectural paint Nigeria",
    "industrial coatings Lagos",
    "paint consultation Alakuko",
  ],
  openGraph: {
    title: "Magna Finishes Global Limited",
    description:
      "Premium paint, mixed and manufactured in Lagos since 2010. Consultation, products and application support.",
    url: "https://magnafinishesglobal.com",
    siteName: "Magna Finishes Global Limited",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="font-body bg-primer text-charcoal antialiased">
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}