import { ArrowRightEndOnRectangleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Metadata } from 'next';
import './globals.css';

// Toto je page komponenta v app route. Vnořené adresáře jsou součástí app routeru
// page komponenta je nutná k tomu, aby byla routa veřejně přístupná
// tady jsou metada
export const metadata: Metadata = {
    title: 'Vstup na stránku Kultivátoru',
    description: 'Login to gain access to Acme page',
};

const LoginPage = () => {
    return (
        // next.js Link pro směrování na přihlašovací stránku
        <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-gray-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-400 md:text-base mx-auto my-auto"
        >
            <span>Log in</span>{' '}
            <ArrowRightEndOnRectangleIcon className="h-4 w-4 mx-1 stroke-gray-1000" />
        </Link>
    );
};

export default LoginPage;
