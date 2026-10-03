import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devtrop.com"),
  title: {
    default: "Devtrop — Full-Stack Web & SaaS Engineering Studio",
    template: "%s | Devtrop",
  },
  description:
    "We engineer scalable web applications and SaaS platforms for ambitious teams. Production-grade software with uncompromising craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-canvas text-body">
        {children}
      </body>
    </html>
  );
}
