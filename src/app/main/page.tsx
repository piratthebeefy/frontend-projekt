import Container from '../_components/container';
import Image from 'next/image';
import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
    title: `Kultivátor: Něco o nás`,
    description: `Stránky pražské metalové kapely.`,
};

const Page = () => {
    const image = '/images/image1.png';

    return (
        <Container>
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg
                            x="50%"
                            y={-1}
                            className="overflow-visible fill-gray-50"
                        >
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect
                            width="100%"
                            height="100%"
                            strokeWidth={0}
                            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                        />
                    </svg>
                </div>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-indigo-600">
                                    Hraj metal
                                </p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Kovové srdce
                                </h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700">
                                    Aliquet nec orci mattis amet quisque
                                    ullamcorper neque, nibh sem. At arcu, sit
                                    dui mi, nibh dui, diam eget aliquam. Quisque
                                    id at vitae feugiat egestas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <Image
                            src={image}
                            width={1380}
                            height={920}
                            alt="Floating picture"
                        />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p>
                                    Faucibus commodo massa rhoncus, volutpat.
                                    Dignissim sed eget risus enim. Mattis mauris
                                    semper sed amet vitae sed turpis id. Id
                                    dolor praesent donec est. Odio penatibus
                                    risus viverra tellus varius sit neque erat
                                    velit. Faucibus commodo massa rhoncus,
                                    volutpat. Dignissim sed eget risus enim.
                                    Mattis mauris semper sed amet vitae sed
                                    turpis id.
                                </p>
                                <figure className="max-w-screen-md mx-auto text-center">
                                    <svg
                                        className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 18 14"
                                    >
                                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                    </svg>
                                    <blockquote>
                                        <p className="text-2xl italic font-medium text-gray-900 dark:text-white">
                                            Skvělá metalová kapela, která se
                                            vyznačuje takovou živou energií,
                                            tvl. Máte silné riffy, ohromující
                                            sóla a výrazné vokály vytvářejí
                                            atmosféru, která vás vtáhne a
                                            nepustí až do konce koncertu.
                                        </p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                                        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                                            <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                                                neznámý fanoušek
                                            </cite>
                                            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">
                                                Restaurace Na Slamníku, Praha
                                            </cite>
                                        </div>
                                    </figcaption>
                                </figure>
                                <p className="mt-8">
                                    Et vitae blandit facilisi magna lacus
                                    commodo. Vitae sapien duis odio id et. Id
                                    blandit molestie auctor fermentum dignissim.
                                    Lacus diam tincidunt ac cursus in vel.
                                    Mauris varius vulputate et ultrices hac
                                    adipiscing egestas. Iaculis convallis ac
                                    tempor et ut. Ac lorem vel integer orci.
                                </p>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">
                                    Přijd na náš koncert!
                                </h2>
                                <p className="mt-6">
                                    Id orci tellus laoreet id ac. Dolor, aenean
                                    leo, ac etiam consequat in. Convallis arcu
                                    ipsum urna nibh. Pharetra, euismod vitae
                                    interdum mauris enim, consequat vulputate
                                    nibh. Maecenas pellentesque id sed tellus
                                    mauris, ultrices mauris. Tincidunt enim
                                    cursus ridiculus mi. Pellentesque nam sed
                                    nullam sed diam turpis ipsum eu a sed
                                    convallis diam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Page;
