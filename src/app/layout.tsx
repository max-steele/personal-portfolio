import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from "next";
import { ThemeProvider } from "./context/ThemeContext";
import "./globals.css";

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
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
