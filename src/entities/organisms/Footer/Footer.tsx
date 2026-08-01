import { HTMLAttributes } from "react";
import styles from "./Footer.module.css";

/**
 * Global site footer.
 */
export function Footer({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
    return (
        <footer
            className={`${styles.root} ${className}`}
            data-testid={Footer.displayName}
            {...rest}
        >
            <nav>
                FOOTER
            </nav>
        </footer>
    );
}
Footer.displayName = "Footer";