import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Imperial BaZi - Professional Chinese Astrology Calculator',
  description: 'Free professional-grade BaZi (Four Pillars of Destiny) calculator and astrology interpretation guide in clean, modern English.',
  metadataBase: new URL('https://fourpillarscalculator.com'),
  alternates: { canonical: 'https://fourpillarscalculator.com' },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Imperial BaZi - Professional Chinese Astrology Calculator',
    description: 'Free professional-grade BaZi (Four Pillars of Destiny) calculator and astrology interpretation guide in clean, modern English.',
    url: 'https://fourpillarscalculator.com',
    siteName: 'Imperial Bazi',
    type: 'website',
    images: [{ url: 'https://fourpillarscalculator.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', images: ['https://fourpillarscalculator.com/og-image.png'] },
  verification: { google: '9_5I2PdRH9zDVCNof-NAkALskfkDyQZI-sQ1I1qVDy4' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-slate-950 text-slate-100 font-sans antialiased selection:bg-amber-500/30 selection:text-amber-200" suppressHydrationWarning>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
