import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const uncutSans = localFont({
  src: "../fonts/UncutSans-Variable.ttf",
  variable: "--font-uncut",
});

const firstCoffee = localFont({
  src: "../fonts/First-Coffee.otf",
  variable: "--font-coffee",
});

const fredoka = localFont({
  src: "../fonts/Fredoka-Variable.ttf",
  variable: "--font-fredoka",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${uncutSans.variable} ${firstCoffee.variable} ${fredoka.variable} h-full antialiased`}
    >
      <body className="h-screen w-screen flex">{children}</body>
    </html>
  );
}
