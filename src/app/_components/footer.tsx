import Container from '@/app/_components/container';

// zápatí
const Footer = () => {
    return (
        // nastavení odstínu pozadí, horní ohraničení a barvy ohraničení
        <footer className="bg-neutral-50 border-t border-neutral-200">
            <Container>
                {/* py třída nastavuje y padding, Flexbox je technika uspořádání prvků v kontejneru tak, aby mohly flexibilně reagovat 
                na různé velikosti obrazovky a zobrazit obsah efektivněji.
                flex-col: Tato třída nastavuje uspořádání prvků ve flexibilním kontejneru do sloupců. Tímto se říká, že prvky budou umístěny 
                pod sebou v jednom sloupci.
                lg:flex-row: Tato třída nastavuje uspořádání prvků ve flexibilním kontejneru do řad (horizontálně), pokud je šířka 
                obrazovky větší nebo rovna velikosti definované pro velké obrazovky (lg, znamená "large" v kontextu velikosti obrazovky). */}
                {/*<div className="py-28 flex flex-col lg:flex-row items-center">
                    <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:pl-56 lg:w-1/2">
                        Najdete nás na
                    </h3>
                </div>*/}
                <div className="flex py-24 sm:py-24">
                    <img
                        className="col-span-2 max-h-12 object-contain lg:col-span-1 mx-auto"
                        src="/icons/facebook-fill.png"
                        alt="Facebook"
                        width={24}
                        height={24}
                    />
                    <img
                        className="col-span-2 max-h-12 object-contain lg:col-span-1 mx-auto"
                        src="/icons/soundcloud-fill.png"
                        alt="SoundCloud"
                        width={24}
                        height={24}
                    />
                    <img
                        className="col-span-2 max-h-12 object-contain lg:col-span-1 mx-auto"
                        src="/icons/spotify-fill.png"
                        alt="Spotify"
                        width={24}
                        height={24}
                    />
                    <img
                        className="col-span-2 max-h-12 object-contain lg:col-span-1 mx-auto"
                        src="/icons/youtube-fill.png"
                        alt="YouTube"
                        width={24}
                        height={24}
                    />
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
