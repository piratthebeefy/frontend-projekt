import Footer from '@/app/_components/footer';
import Header from '../_components/header';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className} suppressHydrationWarning={true}>
                <Header />
                <div className="min-h-screen">{children}</div>
                <Footer />
            </body>
        </html>
    );
}
