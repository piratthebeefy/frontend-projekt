// client komponent v next.js musi byt vzdy, ked sa pouziva useState hook
'use client';
import Footer from '@/app/_components/footer';
import Header from '@/app/_components/header';
import { Inter } from 'next/font/google';
import { useState } from 'react';
import { ThemeContext } from '../_components/theme-context';

const inter = Inter({ subsets: ['latin'] });

// ta zmena témy je přes tailwind třídy. Asi to není nejlepší nápad pro větší projekty, ale tady o zatím postačuje
export default function Layout({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    console.log(`darkMode - layout ${darkMode}`);
    return (
        <html lang="en">
            {/*tady musim zmenit temu na dark*/}
            <body className={`${inter.className} dark:bg-black`}>
                <ThemeContext.Provider value={darkMode}>
                    <Header setDarkMode={setDarkMode} />
                    <div className="min-h-screen">{children}</div>
                    <Footer />
                </ThemeContext.Provider>
            </body>
        </html>
    );
}
