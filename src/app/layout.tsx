import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// toto je root layout komponenta
// dle dokumentace ... "React components defined in special files of a route segment are rendered in a specific hierarchy:"
// - layout.js
// - template.js
// - error.js (React error boundary)
// - loading.js (React suspense boundary)
// - not-found.js (React error boundary)
// - page.js or nested layout.js
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <main>{children}</main>
            </body>
        </html>
    );
}
