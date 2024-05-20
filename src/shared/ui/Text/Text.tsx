import classes from "./Text.module.scss";
import { classNames, Mods } from "../../lib/classNames/classNames";
import { memo } from "react";

export enum TextTheme {
    PRIMARY = "primary",
    INVERTED = "inverted",
    ERROR = "error",
}

export enum TextAlign {
    RIGHT = "right",
    LEFT = "left",
    CENTER = "center",
}

export enum TextSize {
    M = "size_m",
    S = "size_s",
    L = "size_l",
    XL = "size_xl",
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    "data-testid"?: string;
}

type HeaderTagType = "h1" | "h2" | "h3" | "h4";

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: "h4",
    [TextSize.M]: "h3",
    [TextSize.L]: "h2",
    [TextSize.XL]: "h1",
};

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
        size = TextSize.M,
        "data-testid": dataTestId = "Text",
    } = props;

    const HeaderTag = mapSizeToHeaderTag[size];

    const mods: Mods = {
        [classes[theme]]: true,
        [classes[align]]: true,
        [classes[size]]: true,
    };

    return (
        <div className={classNames(classes.Text, mods, [className])}>
            {title && (
                <HeaderTag
                    data-testid={`${dataTestId}.Header`}
                    className={classes.title}
                >
                    {title}
                </HeaderTag>
            )}

            {text && (
                <p
                    className={classes.text}
                    data-testid={`${dataTestId}.Paragraph`}
                >
                    {text}
                </p>
            )}
        </div>
    );
});
