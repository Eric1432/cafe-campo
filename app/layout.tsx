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
  title: "Mi Cafetería | Carta Online",
  description: "Descubre nuestra deliciosa carta de cafés, desayunos y platos principales.",
  openGraph: {
    title: "Mi Cafetería | Carta Online",
    description: "Descubre nuestra deliciosa carta de cafés, desayunos y platos principales.",
    url: 'https://carta-cafe.vercel.app/',
    siteName: 'Mi Cafetería',
    images: [
      {
        url: 'https://carta-cafe.vercel.app/logo.png',
        width: 1200,
        height: 630,
        alt: 'Carta de Mi Cafetería',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}