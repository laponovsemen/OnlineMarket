import classes from "./Avatar.module.scss";
import {classNames, Mods} from "../../lib/classNames/classNames";
import {CSSProperties, useMemo} from "react";

interface AvatarProps {
    className? :string
	src? : string
	size?: number
	alt? : string
}

export const Avatar = (props : AvatarProps) => {
    const {
        src,
        className,
        size,
        alt
    } = props;

    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size || 100,
            height: size || 100
        };
    }, [size]);

    return (
        <img
            className={
                classNames(
                    classes.Avatar,
                    mods ,
                    [className]
                )}
            alt={alt}
            style={styles}
            src={src}
        />


    );
};

