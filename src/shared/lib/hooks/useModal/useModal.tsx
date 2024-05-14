import React, {MutableRefObject, useCallback, useEffect, useRef, useState} from "react";


interface UseModalProps {
	onClose?: () => void;
	isOpen? : boolean;
	lazy? : boolean;
	animationDelay: number;
}

/**
 * Переиспользуемй хук для модальных компонентов (drawer/modal)
 * @param props
 */
export function useModal(props : UseModalProps) {
    const {
        animationDelay,
        onClose,
        isOpen,
        lazy
    } = props;


    const [isClosing, setIsClosing] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    useEffect(() => {
        if(isOpen){
            setIsMounted(true);
        }
    }, [isOpen]);

    const close = useCallback(() => {
        if(onClose) {
            setIsClosing(true);
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, animationDelay);
        }
    }, [animationDelay, onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === "Escape") {
            close();
        }

    }, [close]);
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

    return {
        isClosing,
	    isMounted,
	    close
    };
}
