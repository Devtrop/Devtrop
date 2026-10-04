import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/shared/navbar/Navbar";
import { Footer } from "@/components/shared/footer/Footer";
import WhatsAppButton from "@/components/shared/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devtrop.com"),
  title: {
    default: "Devtrop — Full-Stack Web & SaaS Engineering Studio",
    template: "%s | Devtrop",
  },
  description:
    "We engineer scalable web applications and SaaS platforms for ambitious teams. Production-grade website with uncompromising craftsmanship.",
  icons: {
    icon: "/favicon.png",
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
