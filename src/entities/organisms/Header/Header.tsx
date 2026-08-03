import { HTMLAttributes } from "react";
import styles from "./Header.module.css";
import {NavOption} from "@/entities/organisms/Header/Header.types";
import {HeaderHorizontal} from "@/entities/organisms/Header/HeaderHorizontal";

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
            <div className={styles.inner}>
                <Header.Horizontal navOptions={navOptions} />
            </div>
        </header>
    );
}
Header.displayName = "Header";
Header.Horizontal = HeaderHorizontal;