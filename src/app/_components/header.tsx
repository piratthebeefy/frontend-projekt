'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';

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
            <Link
                href="/login"
                className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
                <span>Log in</span>{' '}
                <ArrowRightEndOnRectangleIcon className="h-16 w-16 mx-1 stroke-gray-1000" />
            </Link>
        </section>
    );
};

export default Header;
