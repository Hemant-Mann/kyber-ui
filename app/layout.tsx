import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vexly Style Dashboard",
  description: "Theme-matched dashboard components in Next.js",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
