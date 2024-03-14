import Container from '@/app/_components/container';
import { ThemeContext } from './theme-context';
import { useContext } from 'react';

// zápatí
// nevim, jestli je toto zobrazeni ikon tim nejlepsim zpusobem
const Footer = () => {
    const darkMode = useContext(ThemeContext);
    console.log(`Dark Mode - footer je ${darkMode}`);

    return (
        // nastavení odstínu pozadí, horní ohraničení a barvy ohraničení
        <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-black">
            <Container>
                <div className="flex py-24 sm:py-24">
                    {/*Facebook*/}
                    <img
                        className="col-span-2 max-h-12 object-contain lg:col-span-1 mx-auto"
                        src={
                            darkMode
                                ? '/icons/facebook-dark.png'
                                : '/icons/facebook-fill.png'
                        }
                        alt="Facebook"
                        width={24}
                        height={24}
                    />
                    {/*Soundcloud*/}
                    <img
                        className="col-span-2 max-h-12 object-contain lg:col-span-1 mx-auto"
                        src={
                            darkMode
                                ? '/icons/soundcloud-dark.png'
                                : '/icons/soundcloud-fill.png'
                        }
                        alt="SoundCloud"
                        width={24}
                        height={24}
                    />
                    {/*Spotify*/}
                    <img
                        className="col-span-2 max-h-12 object-contain lg:col-span-1 mx-auto"
                        src={
                            darkMode
                                ? '/icons/spotify-dark.png'
                                : '/icons/spotify-fill.png'
                        }
                        alt="Spotify"
                        width={24}
                        height={24}
                    />
                    {/*YouTube*/}
                    <img
                        className="col-span-2 max-h-12 object-contain lg:col-span-1 mx-auto"
                        src={
                            darkMode
                                ? '/icons/youtube-dark.png'
                                : '/icons/youtube-fill.png'
                        }
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
