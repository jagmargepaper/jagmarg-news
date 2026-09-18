import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "../globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmartSubscriptionBell from '@/components/SmartSubscriptionBell';
import NewsAlertPrompt from '@/components/NewsAlertPrompt';
import StickySubscribe from '@/components/StickySubscribe';

import AuthModal from '@/components/AuthModal';
import { AuthModalProvider } from '@/context/AuthModalContext';
import { PaywallProvider } from '@/context/PaywallContext';
import { NextAuthProvider } from '@/components/NextAuthProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import Script from 'next/script';
import MorningBriefing from '@/components/MorningBriefing';


const lato = Lato({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://jagmarg.com'),
  title: {
    default: "Jagmarg News - Har Khabar Ka Seedha Rasta",
    template: "%s | Jagmarg News"
  },
  description: "Padiye desh aur duniya ki sabse taaza aur sateek khabrein Jagmarg News par. National, Sports, Entertainment aur aapke shahar ki har badi news.",
  openGraph: {
    title: "Jagmarg News - Har Khabar Ka Seedha Rasta",
    description: "Padiye desh aur duniya ki sabse taaza aur sateek khabrein Jagmarg News par.",
    url: 'https://jagmarg.com',
    siteName: 'Jagmarg News',
    images: [
      {
        url: '/jagmarg-og.png',
        width: 1200,
        height: 630,
        alt: 'Jagmarg News Social Cover',
      },
    ],
    locale: 'hi_IN',
    type: 'website',
  },
  manifest: "/manifest.json",
  appleWebApp: {
    title: "Jagmarg News",
    statusBarStyle: "black-translucent",
    capable: true,
  },
  alternates: {
    languages: {
      'en': '/en',
      'hi': '/hi',
      'pa': '/pa',
    },
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jagmarg News - Har Khabar Ka Seedha Rasta",
    description: "Padiye desh aur duniya ki sabse taaza aur sateek khabrein Jagmarg News par.",
  },
};

export const viewport = {
  themeColor: "#D32F2F",
};

export default async function RootLayout({ children, params }: { children: React.ReactNode, params: Promise<{locale: string}> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  return (
    <html
      lang={locale}
      className={`${lato.variable} h-full antialiased font-sans`}
      suppressHydrationWarning
    >
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-8EB1302J7G" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8EB1302J7G');
          `
        }} />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#F4F4F4] dark:bg-[#0A0A0A] dark:text-white transition-colors duration-300" suppressHydrationWarning>
          <ThemeProvider>
            <NextAuthProvider>
              <AuthModalProvider>
                <PaywallProvider>
                  <Header />
                  <main className="flex-1">
                    {children}
                  </main>
                  <MorningBriefing />
                  <Footer />
                  <StickySubscribe />
                  <AuthModal />
                  <NewsAlertPrompt />
                  <SmartSubscriptionBell locale={locale} />
                </PaywallProvider>
              </AuthModalProvider>
            </NextAuthProvider>
          </ThemeProvider>
        
      </body>
    </html>
  );
}




