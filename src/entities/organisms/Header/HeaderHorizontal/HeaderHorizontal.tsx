import {HTMLAttributes} from "react";
import styles from "./HeaderHorizontal.module.css";
import { NavigationMenu } from '@base-ui/react/navigation-menu';
import {NavOption} from "@/entities/organisms/Header/Header.types";
import textLogo from "../../../design-tokens/assets/text-logo.svg";
import Image from "next/image"
import { Link } from "@/entities";

type HeaderHorizontalProps = {
    navOptions: NavOption[];
} & HTMLAttributes<HTMLDivElement>

export function HeaderHorizontal({ navOptions, className, ...rest }: HeaderHorizontalProps) {
    return (
        <NavigationMenu.Root className={styles.root} data-testid={HeaderHorizontal.displayName}>
            <NavigationMenu.List className={styles.list}>
                <NavigationMenu.Item>
                    <Link href="/">
                        <Image src={textLogo} alt="Blue Cangaroo jumping icon" height={64} width={128} />
                    </Link>
                </NavigationMenu.Item>
                {navOptions.map((navOption) => {
                    return (
                        <NavigationMenu.Item key={navOption.text}>
                            <Link href="/">{navOption.text}</Link>
                        </NavigationMenu.Item>
                    )
                })}
            </NavigationMenu.List>
        </NavigationMenu.Root>
    )
}
HeaderHorizontal.displayName = "HeaderHorizontal";