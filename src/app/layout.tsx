import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "BPRI IKASA | SMAIT Al Irsyad Al Islamiyyah Purwokerto",
  description:
    "Website resmi Badan Percepatan Revitalisasi IKASA SMAIT Al Irsyad Al Islamiyyah Purwokerto.",
  keywords: [
    "IKASA",
    "BPRI",
    "Alumni",
    "SMAIT Al Irsyad",
    "Purwokerto",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={cn("font-sans", inter.variable)}>
      <body className="bg-slate-50 text-slate-800 antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}