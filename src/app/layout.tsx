import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const sans = Jost({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Golden Moments | Wedding & Event Photography, Ushti, West Bengal",
  description:
    "Golden Moments — premium wedding, pre-wedding, engagement, maternity, newborn, rice ceremony & birthday photography with cinematic films and live telecast. Ushti, West Bengal. Call 090464 12124.",
  keywords: [
    "wedding photography",
    "pre wedding shoot",
    "cinematic video",
    "Ushti",
    "West Bengal",
    "Golden Moments",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${display.variable} ${sans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
