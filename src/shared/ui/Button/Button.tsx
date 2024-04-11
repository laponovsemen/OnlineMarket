import {classNames} from "../../lib/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";
import classes from "./Button.module.scss";

export enum ThemeButton{
	CLEAR = "clear",

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className? :string
	theme? : ThemeButton
}

export const Button : FC<ButtonProps> = (props) => {

    const {
        children,
        className,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(
                classes.Button,
                {} ,
                [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

