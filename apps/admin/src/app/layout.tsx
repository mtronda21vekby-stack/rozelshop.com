import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ROZEL Admin',
  description: 'Hidden admin foundation for ROZEL.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
