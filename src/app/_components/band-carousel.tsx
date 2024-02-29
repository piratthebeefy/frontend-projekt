'use client';

// komponenta BandCarousel, která se vykreslí, když je uživatel v /main/band route

import { Carousel } from 'flowbite-react';

const BandCarousel = () => {
    return (
        <div className="relative h-lvh sm:h-lvh xl:h-lvh 2xl:h-lvh mx-32 md:mx-32">
            <Carousel slideInterval={2000} pauseOnHover>
                <div className="h-full w-full duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20 carousel-item">
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                        className="w-full inset-x-0"
                        alt="..."
                    />
                    <span className="absolute top-3/4 right-40 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                        <h1>Jan Ressl</h1>
                        <p>sólová kytara, zpěv</p>
                    </span>
                </div>
                <div className="h-full w-full duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20 carousel-item">
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                        className="w-full inset-x-0"
                        alt="..."
                    />
                    <span className="absolute top-3/4 right-40 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                        <h1>Karel Dinda</h1>
                        <p>rytmická kytara</p>
                    </span>
                </div>
                <div className="h-full w-full duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20 carousel-item">
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                        className="w-full inset-x-0"
                        alt="..."
                    />
                    <span className="absolute top-3/4 right-40 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                        <h1>Martin Plutinský</h1>
                        <p>baskytara</p>
                    </span>
                </div>
                <div className="h-full w-full duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20 carousel-item">
                    <img
                        src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                        className="w-full inset-x-0"
                        alt="..."
                    />
                    <span className="absolute top-3/4 right-40 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">
                        <h1>Karel Peřina</h1>
                        <p>bicí</p>
                    </span>
                </div>
            </Carousel>
        </div>
    );
};

export default BandCarousel;
