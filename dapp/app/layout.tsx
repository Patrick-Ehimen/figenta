import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 200 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 200 300 900",
});

export const metadata: Metadata = {
  title: "Figenta - A Web3 Cross-Chain Aggregation Protocol",
  description: "A Web3 Cross-Chain Aggregation Protocol",
  keywords: "web3, dapp, aggregator, protocol",
  openGraph: {
    url: "/",
    title: "Figenta - A Web3 Cross-Chain Aggregation Protocol",
    description: "A Web3 Cross-Chain Aggregation Protocol",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // TODO image to be added later
    title: "Figenta - A Web3 Cross-Chain Aggregation Protocol",
    description: "A Web3 Cross-Chain Aggregation Protocol",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
