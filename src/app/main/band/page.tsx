import { Metadata } from 'next';
import BandCarousel from '@/app/_components/band-carousel';
import Container from '@/app/_components/container';

export const metadata: Metadata = {
    title: `Kultivátor: Kapela`,
    description: `Stránky pražské metalové kapely.`,
};

const Page = () => {
    return <BandCarousel />;
};

export default Page;
