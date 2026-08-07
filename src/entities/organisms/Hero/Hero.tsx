import { HTMLAttributes } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";


export function Hero({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <section className={`${styles.root} ${className}`} data-testid={Hero.displayName} {...rest}>
            <Image className={styles.background} src="https://placehold.co/600x400.jpg" alt="" fill loading="eager" />
            <div className={styles.inner}>{children}</div>
        </section>
    )
}
Hero.displayName = "Hero";