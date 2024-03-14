import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

// HOC, jen se předá formátování
export function PostTitle({ children }: Props) {
    return (
        <h1 className="text-3xl md:text-50xl lg:text-105xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
            {children}
        </h1>
    );
}
