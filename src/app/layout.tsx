import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "David M. Jentjens - Resume",
  description: "Senior Frontend Lead with 7+ years building enterprise-scale web applications. React, TypeScript, Node.js. Fluent in German, English, and Portuguese.",
  openGraph: {
    title: "David M. Jentjens - Resume",
    description: "Senior Frontend Lead with 7+ years building enterprise-scale web applications.",
    siteName: "David M. Jentjens",
    type: "website",
  },
  metadataBase: new URL("https://davidjentjens.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
