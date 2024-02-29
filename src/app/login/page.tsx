import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
    title: 'Login Page',
    description: 'Login to gain access to Kultivátor page',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const LoginPage = () => {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full items-end rounded-lg bg-gray-500 p-3 md:h-36"></div>
                <LoginForm />
            </div>
        </main>
    );
};

export default LoginPage;
