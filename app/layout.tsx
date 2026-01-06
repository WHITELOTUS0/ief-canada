import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://iefcanada.org"),
  title: {
    default: "IEF Canada | International Ecumenical Fellowship",
    template: "%s | IEF Canada",
  },
  description: "Building Canadian Unity Through Christian Fellowship, Work & Study. Join us in fostering ecumenical unity and relationships that transcend denominational boundaries.",
  keywords: ["IEF Canada", "ecumenical fellowship", "Christian unity", "Toronto church", "bible study", "youth ministry", "interfaith", "community"],
  authors: [{ name: "IEF Canada" }],
  creator: "IEF Canada",
  publisher: "International Ecumenical Fellowship Canada",
  icons: {
    icon: "/ief-logo.png",
    apple: "/ief-logo.png",
  },
  openGraph: {
    title: "IEF Canada | International Ecumenical Fellowship",
    description: "Building Canadian Unity Through Christian Fellowship, Work & Study. Uniting believers across denominational boundaries.",
    url: "https://iefcanada.org",
    siteName: "IEF Canada",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IEF Canada - Building Canadian Unity Through Christian Fellowship",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IEF Canada | International Ecumenical Fellowship",
    description: "Building Canadian Unity Through Christian Fellowship, Work & Study",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when you have it
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${sourceSerif.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
