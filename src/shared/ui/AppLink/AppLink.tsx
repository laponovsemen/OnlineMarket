import classes from "./AppLink.module.scss";
import {classNames} from "../../lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";
import {FC, memo, ReactNode} from "react";

export enum AppLinkTheme{
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
	className?: string
	theme?: AppLinkTheme
	chuildren? : ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        children,
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            className={classNames(classes.AppLink, {}, [className, classes[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    );
});

