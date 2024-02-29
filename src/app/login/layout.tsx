import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main className="min-h-screen">{children}</main>
            </body>
        </html>
    );
};

export default Layout;
