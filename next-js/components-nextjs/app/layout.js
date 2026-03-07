import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Facebook - Make Friends in whole world',
  description: 'This is Facebook',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />

        <div className='container mx-auto min-h-[83vh]'>{children}</div>

        <Footer />
      </body>
    </html>
  );
}
