import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maxwell Steele",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Maxwell Steele</title>
        <meta name="description" content="Maxwell Steele is an undergraduate student studying computer science at the University of Washington's Paul G. Allen School in Seattle, Washington."/>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <meta name="next-size-adjust" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
