import { HTMLAttributes } from "react";
import styles from "./Header.module.css";

type NavOption = {
    text: string;
    href: string;
}

const navOptions: NavOption[] = [
    {
        text: "Home",
        href: "/"
    },
    {
        text: "About",
        href: "/"
    },
    {
        text: "Sessions",
        href: "/"
    },
    {
        text: "Competitions",
        href: "/"
    },
    {
        text: "Resources",
        href: "/"
    },
    {
        text: "Contact",
        href: "/"
    }
];

/**
 * Global site header.
 */
export function Header({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <header
            className={`${styles.root} ${className}`}
            data-testid={Header.displayName}
            {...rest}
        >
            <nav>
                {/*https://reactbits.dev/components/staggered-menu*/}
                {navOptions.map((navOption) => {
                    return (
                        <span>{navOption.text}</span>
                    )
                })}
            </nav>
        </header>
    );
}
Header.displayName = "Header";