import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sourcegraph Interview Resources - Your Guide to Success",
  description: "Comprehensive resources for candidates interviewing at Sourcegraph. Learn about our culture, prepare for interviews, and explore our products.",
  keywords: ["Sourcegraph", "interview", "careers", "software engineer", "developer tools"],
  authors: [{ name: "Sourcegraph" }],
  openGraph: {
    title: "Sourcegraph Interview Resources",
    description: "Your comprehensive guide to interviewing at Sourcegraph",
    url: "https://resources-for-candidates.vercel.app",
    siteName: "Sourcegraph Interview Resources",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sourcegraph Interview Resources",
    description: "Your comprehensive guide to interviewing at Sourcegraph",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
