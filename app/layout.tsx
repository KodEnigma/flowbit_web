import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { PostHogProvider } from "./components/PostHogProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: {
    default: "Zoltraa — Smart Expense Tracking",
    template: "%s — Zoltraa",
  },
  description:
    "Zoltraa is a secure expense tracking platform that analyzes your bank statements in-memory — your data never touches disk. Get instant insights into your spending patterns.",
  keywords: [
    "expense tracking",
    "bank statement analysis",
    "financial insights",
    "spending tracker",
    "budget tool",
    "personal finance",
    "Zoltraa",
  ],
  authors: [{ name: "Zoltraa Technologies" }],
  creator: "Zoltraa Technologies",
  metadataBase: new URL("https://zoltraa.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zoltraa.com",
    siteName: "Zoltraa",
    title: "Zoltraa — Smart Expense Tracking",
    description:
      "Secure expense tracking that analyzes bank statements in-memory. Your financial data never touches disk.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Zoltraa — Smart Expense Tracking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoltraa — Smart Expense Tracking",
    description:
      "Secure expense tracking that analyzes bank statements in-memory. Your financial data never touches disk.",
    images: ["/og.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window,document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init','764409761085914');
fbq('track','PageView');`}
        </Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=764409761085914&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col pt-[56px] md:pt-[64px]">
        <PostHogProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </PostHogProvider>
      </body>
    </html>
  );
}
