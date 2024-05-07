import classes from "./NotificationButton.module.scss";
import {useTranslation} from "react-i18next";
import React, {memo} from "react";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {Button, ButtonTheme} from "../../../../shared/ui/Button/Button";
import {Icon} from "../../../../shared/ui/Icon/Icon";
import NotificationIcon from "../../../../shared/assets/icons/notification-20-20.svg";
import {NotificationList} from "../../../../entities/Notification";
import cls from "../../../../widget/NavBar/ui/Navbar.module.scss";
import {Popover} from "../../../../shared/ui/Popups";

interface NotificationButtonProps {
	className?: string
}

export const NotificationButton = memo((props: NotificationButtonProps) => {

    const {
        className
    } = props;


    return (
        <Popover
            className={
                classNames(
                    classes.NotificationButton,
                    {},
                    [className])
            }
            direction={"bottom left"}
            trigger={
                (<Button
                    theme={ButtonTheme.CLEAR}
                >
                    <Icon
                        Svg={NotificationIcon}
                        inverted
                    />
                </Button>)
            }
        >
            <NotificationList
                className={
                    classNames(
                        cls.notifications,
                        {},
                        []
                    )
                }
            />
        </Popover>
    );
});
