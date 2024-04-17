import classes from "./Icon.module.scss";
import React, {memo} from "react";
import {classNames} from "../../lib/classNames/classNames";

interface IconProps {
	className?: string
    Svg: React.VFC<React.SVGProps<SVGAElement>>
}

export const Icon = memo((props: IconProps) => {

    const {
        className,
        Svg
    } = props;


    return (
        <Svg
            className={
                classNames(
                    classes.Icon,
                    {},
                    [className])}
        />


    );
});

