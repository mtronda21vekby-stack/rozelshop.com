import './globals.css';
import type { Metadata } from 'next';
import { SiteChrome } from '../components/site/SiteChrome';

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
    <html lang="ru">
      <body className="bg-black text-white antialiased">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
