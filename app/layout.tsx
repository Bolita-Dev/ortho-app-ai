import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ortho',
  description: 'Revisa tus faltas de ortografía',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-slate-900`}>
        <div className="box-border flex min-h-screen flex-col gap-4 px-4 pt-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
