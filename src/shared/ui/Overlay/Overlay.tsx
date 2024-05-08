import classes from "./Overlay.module.scss";
import {memo, ReactNode} from "react";
import {classNames} from "../../lib/classNames/classNames";

interface OverlayProps {
	className?: string
    onClick? : () => void;
}

export const Overlay = memo((props: OverlayProps) => {

    const {
        className,
        onClick,

    } = props;


    return (
        <div
            onClick={onClick}
            className={
                classNames(
                    classes.Overlay,
                    {},
                    [className])}
        >
        </div>
    );
});

