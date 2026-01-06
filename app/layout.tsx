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
  metadataBase: new URL("https://www.iefcanada.org"),
  title: {
    default: "IEF Canada | International Ecumenical Fellowship",
    template: "%s | IEF Canada",
  },
  description: "Building Canadian Unity Through Christian Fellowship, Work & Study. Join IEF Canada in fostering ecumenical unity and relationships that transcend denominational boundaries. Bible studies, youth programs, ESL, and community outreach in Toronto.",
  keywords: [
    "IEF Canada",
    "International Ecumenical Fellowship",
    "ecumenical fellowship",
    "Christian unity",
    "Toronto church",
    "bible study Toronto",
    "youth ministry Canada",
    "interfaith dialogue",
    "community outreach",
    "ESL program Toronto",
    "forgiveness centre",
    "trauma healing",
    "Christian community",
    "church fellowship",
    "Pierre Celestin",
  ],
  authors: [{ name: "IEF Canada" }],
  creator: "IEF Canada",
  publisher: "International Ecumenical Fellowship Canada",
  icons: {
    icon: "/ief-logo.png",
    shortcut: "/ief-logo.png",
    apple: "/ief-logo.png",
  },
  openGraph: {
    title: "IEF Canada | International Ecumenical Fellowship",
    description: "Building Canadian Unity Through Christian Fellowship, Work & Study. Uniting believers across denominational boundaries.",
    url: "https://www.iefcanada.org",
    siteName: "IEF Canada",
    images: [
      {
        url: "https://www.iefcanada.org/og-image.png",
        width: 1200,
        height: 630,
        alt: "IEF Canada - Building Canadian Unity Through Christian Fellowship",
        type: "image/png",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IEF Canada | International Ecumenical Fellowship",
    description: "Building Canadian Unity Through Christian Fellowship, Work & Study",
    images: ["https://www.iefcanada.org/og-image.png"],
    creator: "@iefcanada",
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
  alternates: {
    canonical: "https://www.iefcanada.org",
  },
  category: "religion",
  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "IEF Canada",
    alternateName: "International Ecumenical Fellowship Canada",
    url: "https://www.iefcanada.org",
    logo: "https://www.iefcanada.org/ief-logo.png",
    description:
      "Building Canadian Unity Through Christian Fellowship, Work & Study. A community dedicated to fostering ecumenical unity across denominational boundaries.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "11 Ruddington Drive",
      addressLocality: "North York",
      addressRegion: "Ontario",
      postalCode: "M2K 2J6",
      addressCountry: "CA",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-647-862-5144",
      contactType: "customer service",
      email: "iefcecumenica@gmail.com",
    },
    sameAs: [
      "https://www.facebook.com/iefcanada",
      "https://www.instagram.com/iefcanada",
    ],
    nonprofitStatus: "Nonprofit501c3",
    taxID: "1630931-3",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${dmSans.variable} ${sourceSerif.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
