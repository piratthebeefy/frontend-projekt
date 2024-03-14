import { useEffect, useContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { ThemeContext } from './theme-context';

interface ThemeSwitcherProps {
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
    setDarkMode,
}: ThemeSwitcherProps) => {
    const darkMode = useContext(ThemeContext);
    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    return (
        <button onClick={handleDarkMode}>
            {darkMode ? (
                <SunIcon className="w-6 h-6" />
            ) : (
                <MoonIcon className="w-6 h-6" />
            )}
        </button>
    );
};

export default ThemeSwitcher;
