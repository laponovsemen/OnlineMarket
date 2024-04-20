import classes from "./Card.module.scss";
import {HTMLAttributes, memo, ReactNode} from "react";
import {classNames} from "../../lib/classNames/classNames";

interface CardProps extends HTMLAttributes<HTMLDivElement>{
	className?: string,
    children: ReactNode
}

export const Card = memo((props: CardProps) => {

    const {
        className,
        children,
        ...otherProps
    } = props;

    return (
        <div
            className={
                classNames(
                    classes.Card,
                    {},
                    [className])}
            {...otherProps}
        >
            {children}
        </div>
    );
});

