import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Aqqrue - Grow Your Restaurants Without Losing Financial Control",
  description: "The finance team that runs at the speed of your operations. Weekly P&Ls by location. Daily cash flow visibility. Actionable insights on food and labor costs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="hydrated">
      <head>
        {/* Prevent FOUC by ensuring CSS loads before render */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Add hydrated class immediately
                document.documentElement.classList.add('hydrated');
                // Set background color immediately to prevent white flash
                document.documentElement.style.backgroundColor = '#0a0a0a';
                document.body.style.backgroundColor = '#0a0a0a';
              })();
            `,
          }}
        />
        {/* Preload critical CSS */}
        <link rel="preload" href="/globals.css" as="style" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
