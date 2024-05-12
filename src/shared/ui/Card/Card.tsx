import classes from "./Card.module.scss";
import {HTMLAttributes, memo, ReactNode} from "react";
import {classNames} from "../../lib/classNames/classNames";

export enum CardTheme {
    NORMAL = "normal",
    OUTLINED = "outlined"
}

interface CardProps extends HTMLAttributes<HTMLDivElement>{
	className?: string,
    children: ReactNode
    theme? : CardTheme
    max?: boolean
}

export const Card = memo((props: CardProps) => {

    const {
        className,
        children,
        theme = CardTheme.OUTLINED,
        max,
        ...otherProps
    } = props;

    return (
        <div
            className={
                classNames(
                    classes.Card,
                    {[classes.max]: max},
                    [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});

