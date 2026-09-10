import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWA from "@/components/FloatingWA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Koperasi Agro Binatani Lestari | Mesuji, Lampung",
  description: "Koperasi Agro Binatani Lestari. Membangun ekosistem pertanian dan perkebunan yang produktif, transparan, dan berkelanjutan untuk kesejahteraan anggota.",
  keywords: ["Koperasi Mesuji", "Koperasi Way Serdang", "Koperasi Suka Agung", "Koperasi Kelapa Sawit Mesuji", "Agro Binatani Lestari"],
  icons: {
    icon: "/logo.jpg?v=2",
    apple: "/logo.jpg?v=2",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} scroll-smooth antialiased h-full`}>
      <body className="min-h-full flex flex-col bg-[var(--color-cream)] text-[var(--color-forest-900)] selection:bg-[var(--color-palm-500)] selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingWA />
      </body>
    </html>
  );
}
