import type { ReactNode } from 'react';

interface HeaderContainerProps {
    children: ReactNode;
}

export function HeaderContainer({ children }: HeaderContainerProps) {
    return (
        <header className="flex flex-col items-center leading-8 ">
            {children}
        </header>
    )
}