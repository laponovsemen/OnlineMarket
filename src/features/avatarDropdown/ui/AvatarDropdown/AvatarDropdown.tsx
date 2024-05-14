import classes from "./AvatarDropdown.module.scss";
import {useTranslation} from "react-i18next";
import React, {memo, useCallback} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import {Avatar} from "@/shared/ui/Avatar";
import {Dropdown} from "@/shared/ui/Popups";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from "@/entities/User";
import {getRouteAdmin, getRouteProfile} from "@/shared/const/router";

interface AvatarDropdownProps {
	className?: string
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {

    const {
        className
    } = props;

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const {t} = useTranslation();
    const onLogout = useCallback(() =>{
        dispatch(userActions.logout());
    }, [dispatch]);

    if(!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames(classes.AvatarDropdown, {}, [className])}
            direction={"bottom left"}

            items={[
                ...(isAdminPanelAvailable ? [{
                    content: t("Админка"),
                    href: getRouteAdmin()
                }]: []),
                {
                    content: t("Выйти"),
                    onClick: onLogout
                },
                {
                    content: t("Профиль"),
                    href: getRouteProfile(authData.id)
                }
            ]}
            trigger={<Avatar size={30} src={authData.avatar}/>}
        />
    );
});

