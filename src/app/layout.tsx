import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavigationBar from './navigate-bar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const randomColor = getRandomColor();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationBar />
        <span className="w-20 h-20" style={{ color: `${randomColor}` }}>
          random color: {randomColor}
        </span>
        {children}
      </body>
    </html>
  );
}
