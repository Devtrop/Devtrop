import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar/Navbar";
import { Footer } from "@/components/shared/footer/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import { SITE_CONFIG } from "@/data/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Devtrop — Full-Stack Web & SaaS Engineering Studio",
    template: "%s | Devtrop",
  },
  description: SITE_CONFIG.description,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon_512.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans bg-canvas text-body swiss-noise">
        {/* Navbar lives in the root layout — never unmounts between page navigations */}
        <Navbar />
        <main className="flex-1 flex flex-col w-full">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
