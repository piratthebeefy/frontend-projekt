type Props = {
    children?: React.ReactNode;
};

// child komponente se předá stylování

const Container = ({ children }: Props) => {
    // mx-auto třída nastavuje vodorovné vycentrování elementu vůči jeho rodiči (v tomto případě bude element vodorovně
    // vycentrován v rámci kontejneru).
    // px-5 Tato třída nastavuje vnitřní padding (pro osu x) elementu na určitou hodnotu v pixelech
    // dark:bg-black je třída souvisejíci s témou
    return <div className="container mx-auto px-5">{children}</div>;
};

export default Container;
