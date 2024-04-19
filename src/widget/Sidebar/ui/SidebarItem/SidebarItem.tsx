import classes from "./SidebarItem.module.scss";
import {AppLink, AppLinkTheme} from "../../../../shared/ui/AppLink/AppLink";
import React, {memo} from "react";
import {useTranslation} from "react-i18next";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {useSelector} from "react-redux";
import {getUserAuthData} from "../../../../entities/User";
import {SidebarItemType} from "../../model/types/sidebar";

interface SidebarItemProps {
	item: SidebarItemType,
    collapsed: boolean
}

export const SidebarItem = memo(({item, collapsed} : SidebarItemProps) => {
    const {t} = useTranslation();
    const isAuth = useSelector(getUserAuthData);

    if(item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            to={item.path}
            className={classNames(
                classes.item,
                {[classes.collapsed]: collapsed}
            )}
            theme={AppLinkTheme.SECONDARY}
        >
            <item.Icon className={classes.icon}/>
            <span className={classes.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});

