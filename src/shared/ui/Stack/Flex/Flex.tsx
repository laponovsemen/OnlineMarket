import classes from "./Flex.module.scss";
import {memo, ReactNode} from "react";
import {classNames, Mods} from "../../../lib/classNames/classNames";

export type FlexAlign = "start" | "center" | "end"
export type FlexJustify = "start" | "center" | "end" | "between"
export type FlexDirection = "row" | "column"
export type FlexGap = "4" | "8" | "16" | "32"

const justifyClasses: Record<FlexJustify, string> = {
    start: classes.justifyStart,
    center: classes.justifyCenter,
    end: classes.justifyEnd,
    between: classes.justifyBetween
};

const alignClasses: Record<FlexAlign, string> = {
    start: classes.alignStart,
    center: classes.alignCenter,
    end: classes.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
    row: classes.directionRow,
    column: classes.directionColumn
};

const gapClasses: Record<FlexGap, string> = {
    4: classes.gap4,
    8: classes.gap8,
    16: classes.gap16,
    32: classes.gap32,
};

export interface FlexProps {
	className?: string
    children? : ReactNode
    justify? : FlexJustify;
    align?: FlexAlign
    direction?: FlexDirection
    gap?: FlexGap
    max?: boolean
}

export const Flex = memo((props: FlexProps) => {

    const {
        className,
        children,
        justify = "start",
        direction = "row",
        align = "center",
        gap,
        max
    } = props;

    const additionalClasses = [
        className,
        alignClasses[align],
        justifyClasses[justify],
        directionClasses[direction],
        gap && gapClasses[gap]
    ];

    const mods: Mods = {
        [classes.max]: max
    };


    return (
        <div className={
            classNames(
                classes.Flex,
                mods,
                additionalClasses)}
        >
            {children}
        </div>
    );
});

