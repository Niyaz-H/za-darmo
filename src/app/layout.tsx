import type { Metadata } from 'next';
import { Header, Footer } from '@/components/layout';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s – Za-darmo.pl',
    default: 'Za-darmo.pl – Odpowiedzi na pytania dotyczące biblii i chrześcijaństwa',
  },
  description: 'Odpowiedzi na pytania dotyczące biblii i chrześcijaństwa. Zbawienie z łaski przez wiarę - za darmo.',
  keywords: ['biblia', 'chrześcijaństwo', 'zbawienie', 'ewangelia', 'jezus chrystus', 'pismo święte'],
  authors: [{ name: 'Za-darmo.pl' }],
  openGraph: {
    type: 'website',
    locale: 'pl_PL',
    url: 'https://za-darmo.pl',
    siteName: 'Za-darmo.pl',
    title: 'Za-darmo.pl – Odpowiedzi na pytania dotyczące biblii i chrześcijaństwa',
    description: 'Odpowiedzi na pytania dotyczące biblii i chrześcijaństwa. Zbawienie z łaski przez wiarę - za darmo.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Za-darmo.pl',
    description: 'Odpowiedzi na pytania dotyczące biblii i chrześcijaństwa.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}