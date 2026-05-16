import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Razan Mohamed | Software Engineer",
  description:
    "A single-page portfolio for Razan Mohamed, software engineer focused on distributed systems and AI."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
