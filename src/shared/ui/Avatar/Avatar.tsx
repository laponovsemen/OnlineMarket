import classes from "./Avatar.module.scss";
import {classNames, Mods} from "../../lib/classNames/classNames";
import {CSSProperties, useMemo} from "react";
import {AppImage} from "../AppImage";
import UserIcon from "./../../assets/icons/user-filled.svg";
import {Icon} from "../Icon";
import {Skeleton} from "../Skeleton";

interface AvatarProps {
    className? :string
	src? : string
	size?: number
	alt? : string
    fallbackInverted?: boolean;
}

export const Avatar = (props : AvatarProps) => {
    const {
        src,
        className,
        size = 100,
        alt,
        fallbackInverted
    } = props;

    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size
        };
    }, [size]);

    const fallback = <Skeleton
        width={size}
        height={size}
        border={"50%"}
    />;

    const errorFallback = <Icon
        inverted={fallbackInverted}
        Svg={UserIcon}
        height={size}
        width={size}
    />;



    return (
        <AppImage
            className={
                classNames(
                    classes.Avatar,
                    mods ,
                    [className]
                )}
            fallback={fallback}
            errorFallback={errorFallback}
            alt={alt}
            style={styles}
            src={src}
        />


    );
};

