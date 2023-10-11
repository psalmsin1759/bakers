import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from './theme-provider';
import { ThemeSwitcher } from '../component/ThemeSwitcher';
import { switchThemeDuration } from './switch-theme-duration';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BakersLuxury',
  description: 'BakersLuxury',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 dark:bg-[#0d1117] ${switchThemeDuration}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
