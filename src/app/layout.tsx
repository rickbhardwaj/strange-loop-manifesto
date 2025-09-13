import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Great custom AI is a competitive advantage | Strange Loop Labs",
  description:
    "Generic AI tools deliver commodity results. We build custom AI for your most strategic processes by embedding with professionals and automating end-to-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
