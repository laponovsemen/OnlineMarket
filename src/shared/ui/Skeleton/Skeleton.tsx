import classes from "./Skeleton.module.scss";
import { CSSProperties, memo } from "react";
import { classNames } from "../../lib/classNames/classNames";

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = memo((props: SkeletonProps) => {
    const { className, border, height, width } = props;

    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
    };

    return (
        <div
            className={classNames(classes.Skeleton, {}, [className])}
            style={styles}
        />
    );
});
