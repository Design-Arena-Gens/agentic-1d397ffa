import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Research Article Explainer",
  description: "Understanding complex research articles made simple",
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
