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
}

export const Card = memo((props: CardProps) => {

    const {
        className,
        children,
        theme = CardTheme.OUTLINED,
        ...otherProps
    } = props;

    return (
        <div
            className={
                classNames(
                    classes.Card,
                    {},
                    [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </div>
    );
});

