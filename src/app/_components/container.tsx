type Props = {
    children?: React.ReactNode;
};

// tahle komponenta je tady z Next.js tutoriálu, její význam mi uniká. Nejspíš se child komponente předa jen stylování

const Container = ({ children }: Props) => {
    // mx-auto třída nastavuje vodorovné vycentrování elementu vůči jeho rodiči (v tomto případě bude element vodorovně vycentrován v rámci kontejneru).
    // px-5 Tato třída nastavuje vnitřní padding (odstup) elementu na určitou hodnotu v pixelech.
    // V tomto případě bude padding nastaven na 5 pixely na všech stranách elementu.
    return <div className="container mx-auto px-5">{children}</div>;
};

export default Container;
