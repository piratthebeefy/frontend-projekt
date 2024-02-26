'use client';

import { Carousel } from 'flowbite-react';

const BandCarousel = () => {
    return (
        <div className="h-lvh sm:h-lvh xl:h-lvh 2xl:h-lvh mx-32 md:mx-32">
            <Carousel slideInterval={2000} pauseOnHover>
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
                    alt="..."
                />
                <img
                    src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
                    alt="..."
                />
            </Carousel>
        </div>
    );
};

export default BandCarousel;
