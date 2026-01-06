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
  title: "IEF Canada | International Ecumenical Fellowship",
  description: "Building Canadian Unity Through Christian Fellowship, Work & Study. Join us in fostering ecumenical unity and relationships that transcend denominational boundaries.",
  keywords: ["IEF Canada", "ecumenical fellowship", "Christian unity", "Toronto church", "bible study", "youth ministry"],
  openGraph: {
    title: "IEF Canada | International Ecumenical Fellowship",
    description: "Building Canadian Unity Through Christian Fellowship, Work & Study",
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
      <body className={`${dmSans.variable} ${sourceSerif.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
