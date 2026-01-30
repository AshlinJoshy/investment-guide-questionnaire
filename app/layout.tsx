import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

// Use Google Fonts as closest free alternatives to Ivy Mode/Epic
// Ivy Mode (Serif) -> Playfair Display
const playfair = Playfair_Display({
  variable: "--font-ivy-mode",
  subsets: ["latin"],
  display: "swap",
});

// Ivy Epic (Sans-serif) -> Lato
const lato = Lato({
  variable: "--font-ivy-epic",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Betterhomes | Property Investment Simulator",
  description: "Discover your investment perspective with 40 years of Dubai property market insight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-white text-bh-slate font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
