'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
    { key: 'O nás', href: '/' },
    { key: 'Kapela', href: '/band' },
    { key: 'Novinky', href: '/news' },
    { key: 'Média', href: '/media' },
];
const Header = () => {
    const pathname = usePathname();

    return (
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 mx-32 md:mx-32">
            {navLinks.map((link) => (
                <Link
                    href={link.href}
                    className={clsx(
                        'text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8 drop-shadow-md hover:drop-shadow-xl hover:text-gray-700',
                        {
                            'text-gray-800': pathname === link.href,
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
