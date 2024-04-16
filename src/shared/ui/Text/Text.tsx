import classes from "./Text.module.scss";
import {classNames, Mods} from "../../lib/classNames/classNames";
import {memo} from "react";

export enum TextTheme {
    PRIMARY = "primary",
    ERROR = "error"
}

export enum TextAlign {
    RIGHT = "right",
    LEFT = "left",
    CENTER = "center"
}


interface TextProps {
    className? :string
	title? : string;
	text? : string;
    theme? : TextTheme;
    align? :TextAlign
}

export const Text = memo((props : TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT
    } = props;

    const mods: Mods = {
        [classes[theme]]: true,
        [classes[align]]: true
    };

    return (
        <div className={classNames(classes.Text, mods , [className])}>
            {title && <p className={classes.title}>{title}</p>}
            {text && <p className={classes.text}>{text}</p>}
        </div>
    );
});

