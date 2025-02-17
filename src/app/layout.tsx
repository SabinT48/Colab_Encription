import type { Metadata, Viewport } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Encryption Converter",
  description: "Convert your text using different encryption methods",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  // Add any other viewport configurations you need
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} antialiased flex flex-col h-screen md:overflow-hidden`}
      >
        <Header />
        <main className="flex-1 w-full max-w-[100vw] md:overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}