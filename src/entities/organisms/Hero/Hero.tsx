import { HTMLAttributes } from "react";
import styles from "./Hero.module.css";


export function Hero({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <section className={`${styles.root} ${className}`} data-testid={Hero.displayName} {...rest}>
            {children}
        </section>
    )
}
Hero.displayName = "Hero";