import classes from "./Drawer.module.scss";
import {useTranslation} from "react-i18next";
import {memo, ReactNode} from "react";
import {useTheme} from "../../../app/providers/ThemeProvider";
import {classNames, Mods} from "../../lib/classNames/classNames";
import {Portal} from "../Portal/Portal";
import {Overlay} from "../Overlay/Overlay";
import {useModal} from "../../lib/hooks/useModal/useModal";

interface DrawerProps {
	className?: string
    children: ReactNode;
    isOpen? : boolean;
    onClose? : () => void;
    lazy?: boolean
}

export const Drawer = memo((props: DrawerProps) => {

    const {
        className,
        onClose,
        isOpen,
        children,
        lazy
    } = props;

    const {
        isClosing,
        isMounted,
        close
    } = useModal({
        animationDelay: 300,
        onClose,
        isOpen
    });

    const mods: Mods = {
        [classes.opened]: isOpen,
        [classes.isClosing]: isClosing,
    };

    const {theme} = useTheme();

    if(lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>


            <div
                className={
                    classNames(
                        classes.Drawer,
                        mods,
                        [className, theme, "app_drawer"])}
            >
                <Overlay onClick={close}/>
                <div
                    className={classes.content}
                >
                    {children}
                </div>
            </div>
        </Portal>
    );
});

