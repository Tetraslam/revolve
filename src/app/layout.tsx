import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "(rev)olve - Boston's Most Cracked Hackathon",
  description:
    "48 hours of pure creation. November 7-9, 2025 at TBD. Organized by rev, Boston's premier hacker community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">{children}</body>
    </html>
  );
}
