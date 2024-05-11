import {classNames, Mods} from "../../lib/classNames/classNames";
import {ButtonHTMLAttributes, FC, memo, ReactNode} from "react";
import classes from "./Button.module.scss";

export enum ButtonTheme{
	CLEAR = "clear",
    OUTLINE = "outline",
    OUTLINE_RED = "outline_red",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "backgroundInverted",
    CLEAR_INVERTED = "clearInverted"

}
export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className? :string
	theme? : ButtonTheme
    square? :boolean
    size? :ButtonSize
    disabled? : boolean
    children? : ReactNode
    fullWidth? : boolean
}

export const Button = memo((props : ButtonProps) => {

    const {
        children,
        className,
        theme = ButtonTheme.OUTLINE,
        square,
        size = ButtonSize.M,
        disabled,
        fullWidth,
        ...otherProps
    } = props;

    const mods: Mods = {
        [classes.square]: square,
        [classes[size]]: true,
        [classes.disabled]: disabled,
        [classes.fullWidth]: fullWidth,

    };

    return (
        <button
            disabled={disabled}
            className={classNames(
                classes.Button,
                mods ,
                [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});

