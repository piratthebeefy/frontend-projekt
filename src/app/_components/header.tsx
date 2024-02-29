'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
    { key: 'O nás', href: '/main' },
    { key: 'Kapela', href: '/main/band' },
    { key: 'Novinky', href: '/main/news' },
    { key: 'Média', href: '/main/media' },
];
const Header = () => {
    // do promenne pathname ulozim aktualni routu, na ktere se nachazim, a tu pak kondicionalne zvyraznim (pomoci knihovny clsx) - vis sede pismo jak
    // ostatni napisy v header
    const pathname = usePathname();

    return (
        <section
            suppressHydrationWarning={true}
            className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 mx-32 md:mx-32"
        >
            {/* odkazy na jednotlivé routy */}
            {navLinks.map((link) => (
                <Link
                    href={link.href}
                    key={link.key}
                    className={clsx(
                        'text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 drop-shadow-md hover:drop-shadow-xl hover:text-gray-800',
                        {
                            'text-gray-700': pathname === link.href,
                        }
                    )}
                >
                    {link.key}
                </Link>
            ))}
        </section>
    );
};

export default Header;
