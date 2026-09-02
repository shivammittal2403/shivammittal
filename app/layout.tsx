import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Shivam Mittal — Cyber Security Consultant',
  description: 'Cyber security consultant specialising in GRC, threat intelligence, OSINT, VAPT, AI security and practical security training.',
  openGraph: {
    title: 'Shivam Mittal — Cyber Security Consultant',
    description: 'GRC, threat intelligence, OSINT, VAPT, AI security and practical security training.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Shivam Mittal — Cyber Security Consultant',
    description: 'GRC, threat intelligence, OSINT, VAPT, AI security and practical security training.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}

