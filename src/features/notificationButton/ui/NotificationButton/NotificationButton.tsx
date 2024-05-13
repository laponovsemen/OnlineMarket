import classes from "./NotificationButton.module.scss";
import React, {memo, useCallback, useState} from "react";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {Button, ButtonTheme} from "../../../../shared/ui/Button/Button";
import {Icon} from "../../../../shared/ui/Icon/Icon";
import NotificationIcon from "../../../../shared/assets/icons/notification-20-20.svg";
import {NotificationList} from "../../../../entities/Notification";
import cls from "../../../../widget/NavBar/ui/Navbar.module.scss";
import {Popover} from "../../../../shared/ui/Popups";
import {Drawer} from "../../../../shared/ui/Drawer/Drawer";
import {BrowserView, MobileView} from "react-device-detect";

interface NotificationButtonProps {
	className?: string
}


/**
 * опционально также можно делить мобайл и боузер вью на чанки для того чтобы подгружалось только
 */
export const NotificationButton = memo((props: NotificationButtonProps) => {

    const {
        className
    } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false);
    }, []);
    console.log(isOpen, " isOpens");
    const trigger = (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={onOpenDrawer}
        >
            <Icon
                Svg={NotificationIcon}
                inverted
            />
        </Button>
    );


    return (
        <div>
            <BrowserView>
                <Popover
                    className={
                        classNames(
                            classes.NotificationButton,
                            {},
                            [className])
                    }
                    direction={"bottom left"}
                    trigger={trigger}
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
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer
                    isOpen={isOpen}
                    onClose={onCloseDrawer}
                >
                    <NotificationList />
                </Drawer>
            </MobileView>

        </div>

    );
});

