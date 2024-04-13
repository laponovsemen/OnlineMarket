
import classes from "./Modal.module.scss";
import {classNames} from "../../lib/classNames/classNames";
import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {Portal} from "../Portal/Portal";

interface ModalProps {
    className? :string
	children? : ReactNode
    isOpen? : boolean
    onClose?: () => void
}

const ANIMATION_DELAY = 300;

export const Modal = (props : ModalProps) => {
    const {
        isOpen,
        children,
        className,
        onClose
    } = props;

    const [isClosing, setIsClosing] = useState(false);

    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const closeHandler = useCallback(() => {
        if(onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === "Escape") {
            closeHandler();
        }

    }, [closeHandler]);
    useEffect(() => {
        if(isOpen) {
            window.addEventListener("keydown", onKeyDown);
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [isOpen, onKeyDown]);
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // предотвращает всплытие при нажатии на оверлей и на модалку, чтобы при нажатии только на оверлей закрывалась модалка
    };

    const mods: Record<string, boolean> = {
        [classes.opened]: isOpen,
        [classes.isClosing]: isClosing
    };

    return (

        <Portal>
            <div
                className={classNames(
                    classes.Modal,
                    mods ,
                    [className])}
            >
                <div
                    className={classNames(classes.overlay)}
                    onClick={closeHandler}
                >
                    <div
                        className={classNames(classes.content)}
                        onClick={onContentClick}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>

    );
};

