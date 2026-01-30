import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Configure Ivy Mode (Serif)
const ivyMode = localFont({
  src: [
    {
      path: './fonts/IvyMode-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/IvyMode-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/IvyMode-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/IvyMode-Italic.woff2',
      weight: '400',
      style: 'italic',
    }
  ],
  variable: '--font-ivy-mode',
  display: 'swap',
});

// Configure Ivy Epic (Sans-serif)
const ivyEpic = localFont({
  src: [
    {
      path: './fonts/IvyEpic-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/IvyEpic-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/IvyEpic-Light.woff2',
      weight: '300',
      style: 'normal',
    }
  ],
  variable: '--font-ivy-epic',
  display: 'swap',
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
        className={`${ivyMode.variable} ${ivyEpic.variable} antialiased bg-white text-bh-slate font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
