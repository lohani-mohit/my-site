import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohit Lohani - Full Stack Developer & Musician",
  description:
    "Full Stack Developer with expertise in Next.js, JavaScript, Node.js, and Cloud Technologies. Also a passionate musician.",
  keywords:
    "Full Stack Developer, Next.js, JavaScript, Node.js, QA, Testing, Music, Guitar",
  icons: {
    icon: [
      {
        url: "/my-site/images/profile.jpeg",
        sizes: "32x32",
        type: "image/jpeg",
      },
      {
        url: "/my-site/images/profile.jpeg",
        sizes: "16x16",
        type: "image/jpeg",
      },
    ],
    apple: {
      url: "/my-site/images/profile.jpeg",
      sizes: "180x180",
      type: "image/jpeg",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`${inter.className} bg-base-100 text-base-content dark`}>
        <Navigation />
        <div className="min-h-screen flex flex-col">
          {children}
          <Footer />
        </div>
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
