import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: `Kultivátor: Pražská hard'n'heavy kapela`,
    description: `Stránky pražské metalové kapely.`,
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
