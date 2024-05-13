import classes from "./AvatarDropdown.module.scss";
import {useTranslation} from "react-i18next";
import React, {memo, useCallback} from "react";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {Avatar} from "../../../../shared/ui/Avatar/Avatar";
import {Dropdown} from "../../../../shared/ui/Popups";
import {useDispatch, useSelector} from "react-redux";
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from "../../../../entities/User";
import {RoutePath} from "@/shared/const/router";

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
                    href: RoutePath.admin_panel
                }]: []),
                {
                    content: t("Выйти"),
                    onClick: onLogout
                },
                {
                    content: t("Профиль"),
                    href: RoutePath.profile + authData.id
                }
            ]}
            trigger={<Avatar size={30} src={authData.avatar}/>}
        />
    );
});

