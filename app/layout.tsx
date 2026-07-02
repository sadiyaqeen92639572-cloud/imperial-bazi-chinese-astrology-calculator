import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// TODO: add GSC verification tag for imperialbazi.com
export const metadata: Metadata = {
  title: 'Imperial BaZi - Professional Chinese Astrology Calculator',
  description: 'Free professional-grade BaZi (Four Pillars of Destiny) calculator and astrology interpretation guide in clean, modern English.',
  metadataBase: new URL('https://imperialbazi.com'),
  alternates: { canonical: 'https://imperialbazi.com' },
  openGraph: {
    title: 'Imperial BaZi - Professional Chinese Astrology Calculator',
    description: 'Free professional-grade BaZi (Four Pillars of Destiny) calculator and astrology interpretation guide in clean, modern English.',
    url: 'https://imperialbazi.com',
    siteName: 'Imperial Bazi',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
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
