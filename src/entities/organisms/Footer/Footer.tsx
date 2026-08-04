import { HTMLAttributes } from "react";
import styles from "./Footer.module.css";
import { Paragraph } from "@/entities";
import { address, cascNumber } from "@/lib/metadata";

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
            <div className={styles.inner}>
                <Paragraph className={styles.copy} align="center" margin="none" fontSize="small">&copy; Cambridge Cangaroos {new Date().getFullYear()}</Paragraph>
                <Paragraph className={styles.copy} align="center" margin="none" fontSize="small">CASC: {cascNumber}</Paragraph>
                <address className={styles.copy}>{address}</address>
            </div>
        </footer>
    );
}
Footer.displayName = "Footer";