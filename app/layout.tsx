import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vexly Style Dashboard",
  description: "Theme-matched dashboard components in Next.js",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var key = "vexly-theme-mode";
                  var saved = localStorage.getItem(key);
                  var mode = (saved === "light" || saved === "dark" || saved === "system") ? saved : "system";
                  var resolved = mode === "system"
                    ? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
                    : mode;
                  document.documentElement.dataset.theme = resolved;
                  document.documentElement.style.colorScheme = resolved;
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
