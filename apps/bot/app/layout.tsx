import './global.css';

import { cn } from '@nextjs-telegram/utils';
import { Inter as FontSans } from 'next/font/google';

export const metadata = {
  title: 'Welcome to NextJS Telegram Bot!',
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
