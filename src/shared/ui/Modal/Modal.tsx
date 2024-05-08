import classes from "./Modal.module.scss";
import {classNames, Mods} from "../../lib/classNames/classNames";
import React, {ReactNode} from "react";
import {Portal} from "../Portal/Portal";
import {useTheme} from "../../../app/providers/ThemeProvider";
import {Overlay} from "../Overlay/Overlay";
import {useModal} from "../../lib/hooks/useModal/useModal";

interface ModalProps {
    className? :string
	children? : ReactNode
    isOpen? : boolean
    onClose?: () => void
    lazy? : boolean
}

const ANIMATION_DELAY = 300;

export const Modal = (props : ModalProps) => {
    const {
        isOpen,
        children,
        className,
        onClose,
        lazy
    } = props;

    const {theme} = useTheme();

    const {
        isClosing,
        isMounted,
        close
    } = useModal({
        animationDelay: ANIMATION_DELAY,
        onClose,
        isOpen
    });

    const mods: Mods = {
        [classes.opened]: isOpen,
        [classes.isClosing]: isClosing
    };

    if(lazy && !isMounted){
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(
                    classes.Modal,
                    mods ,
                    [className])}
            >
                <Overlay
                    onClick={close}
                />
                <div
                    className={classNames(classes.content)}
                >
                    {children}
                </div>
            </div>
        </Portal>

    );
};

