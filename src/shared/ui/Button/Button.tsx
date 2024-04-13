import {classNames} from "../../lib/classNames/classNames";
import {ButtonHTMLAttributes, FC} from "react";
import classes from "./Button.module.scss";

export enum ButtonTheme{
	CLEAR = "clear",
    OUTLINE = "outline",
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
}

export const Button : FC<ButtonProps> = (props) => {

    const {
        children,
        className,
        theme,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [classes.square]: square,
        [classes[size]]: true
    };

    return (
        <button
            className={classNames(
                classes.Button,
                mods ,
                [className, classes[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};

