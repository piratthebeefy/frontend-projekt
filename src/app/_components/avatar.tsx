type Props = {
    name: string;
    picture: string;
};

// tato složka _components není přístupná, protože neobsahuje page.tsx. Je to jen uložiště komponent, které nejsou součástí page routeru

const Avatar = ({ name, picture }: Props) => {
    return (
        <div className="flex items-center">
            <img
                src={picture}
                className="w-12 h-12 rounded-full mr-4"
                alt={name}
            />
            <div className="text-xl font-bold">{name}</div>
        </div>
    );
};

export default Avatar;
