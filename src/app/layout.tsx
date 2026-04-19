import "./globals.css";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";

import { Toaster } from "sonner";

import { inter, mono, nasalization, quentine } from "./fonts";

import { Keywords } from "@/constant";
import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  applicationName: "Waleed Hussain",
  title: "Waleed Hussain | Web Developer — Where Code Meets Creativity",
  description:
    "Waleed Hussain is a passionate Web Developer who transforms ideas into stunning, responsive digital experiences using HTML, CSS, and JavaScript. Explore his projects and portfolio.",
  authors: [
    {
      name: "Waleed Hussain",
      url: "https://waleed-hussain-dev.vercel.app",
    },
  ],
  creator: "Waleed Hussain",
  referrer: "origin-when-cross-origin",
  category: "Portfolio",
  classification: "Software Development",
  keywords: Keywords,
  metadataBase: new URL("https://waleed-hussain-dev.vercel.app"),


  alternates: {
    canonical: "https://waleed-hussain-dev.vercel.app",
    languages: {
      "en-US": "https://waleed-hussain-dev.vercel.app",
    },
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
    google: "1c8e801d4931baa4",
  },
  appleWebApp: {
    capable: true,
    title: "Waleed Hussain",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",

  openGraph: {
    title: "Waleed Hussain",
    description:
      "Explore Waleed Hussain's portfolio featuring web development projects built with HTML, CSS, and JavaScript. Where Code Meets Creativity.",
    url: "https://waleed-hussain-dev.vercel.app",
    siteName: "Waleed Hussain",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Waleed Hussain Portfolio Thumbnail",
      },
    ],
    locale: "en_US",
    type: "website",
  },


  twitter: {
    card: "summary_large_image",
    title: "Waleed Hussain",
    description:
      "Check out Waleed Hussain's personal portfolio and web development projects — Where Code Meets Creativity.",
    images: ["/images/thumbnail.png"],
    creator: "@waleedhusaindev",
    site: "@waleedhusaindev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} font-sans`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {children}
        <Toaster position="bottom-right" richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}
