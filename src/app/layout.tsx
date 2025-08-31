import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Picklehub at Tiendesitas - Professional Pickleball Coaches",
  description: "Meet our team of professional pickleball coaches at Picklehub Tiendesitas. Expert instruction for all skill levels in the Philippines' premier pickleball facility.",
  keywords: ["pickleball", "coaches", "Tiendesitas", "Philippines", "sports", "training", "lessons"],
  authors: [{ name: "Picklehub at Tiendesitas" }],
  openGraph: {
    title: "Picklehub at Tiendesitas - Professional Pickleball Coaches",
    description: "Meet our team of professional pickleball coaches at Picklehub Tiendesitas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
