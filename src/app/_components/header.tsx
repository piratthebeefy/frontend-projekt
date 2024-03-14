'use client';
import clsx from 'clsx';
import Link from 'next/link';
import ThemeSwitcher from '@/app/_components/theme-switcher';
import { usePathname } from 'next/navigation';

interface HeaderProps {
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ setDarkMode }: HeaderProps) => {
    // do promenne pathname ulozim aktualni routu, na ktere se nachazim, a tu pak kondicionalne zvyraznim (pomoci knihovny clsx)
    // pri najeti kurzoru mysi vis sede pismo jak ostatni napisy v header
    const pathname = usePathname();
    // routy
    const navLinks = [
        { key: 'O nás', href: '/main' },
        { key: 'Kapela', href: '/main/band' },
        { key: 'Novinky', href: '/main/news' },
        { key: 'Média', href: '/main/media' },
    ];

    return (
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12 mx-32 md:mx-32 dark:text-gray-300">
            {/* odkazy na jednotlivé routy */}
            {navLinks.map((link) => (
                <Link
                    href={link.href}
                    key={link.key}
                    className={clsx(
                        'text-90xl md:text-395xl font-bold tracking-tighter leading-tight md:pr-8 transition-all ease-in-out drop-shadow-md dark:drop-shadow-dark-md hover:drop-shadow-xl dark:hover:drop-shadow-xl hover:text-gray-800 hover:text-100xl hover:md:text-400xl dark:hover:text-gray-100',
                        {
                            'transition-all ease-in-out dark:text-white text-gray-700 hover:md:text-100xl hover:md:text-400xl':
                                pathname === link.href,
                        }
                    )}
                >
                    {link.key}
                </Link>
            ))}
            <ThemeSwitcher setDarkMode={setDarkMode} />
        </section>
    );
};

export default Header;
