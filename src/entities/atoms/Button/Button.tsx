import { ButtonProps } from "./Button.types";
import styles from "./Button.module.css";

/**
 * Clickable button for executing actions.
 */
export function Button({ className, variant = "standard", ...rest }: ButtonProps) {
  return (
    <button
      className={`${styles.root} ${className}`}
      data-testid={Button.displayName}
      {...rest}
    />
  );
}
Button.displayName = "Button";
