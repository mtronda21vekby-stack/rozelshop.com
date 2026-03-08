import './globals.css';
import type { Metadata } from 'next';
import { SiteFooter } from '../components/site/SiteFooter';
import { SiteHeader } from '../components/site/SiteHeader';

export const metadata: Metadata = {
  title: {
    default: 'ROZEL',
    template: '%s | ROZEL'
  },
  description: 'ROZEL — modern luxury fashion house.'
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
