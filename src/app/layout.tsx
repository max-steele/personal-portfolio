import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
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
  title: "Maxwell Steele | Software Engineer",
  description: "Maxwell Steele - Undergraduate Computer Science student at the University of Washington, software engineer in the Foundational Data Science group at Pacific Northwest National Laboratory in Seattle, Washington.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Maxwell Steele | Software Engineer</title>
        <meta name="description" content="Maxwell Steele is an undergraduate student at the University of Washington and a 
        software engineer in the Foundational Data Science group at Pacific Northwest National Laboratory in Seattle, Washington." />
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <meta name="next-size-adjust" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
