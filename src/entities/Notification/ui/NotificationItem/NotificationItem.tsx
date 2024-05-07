import classes from "./NotificationItem.module.scss";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {Notification} from "../../model/types/notification";
import {Card, CardTheme} from "../../../../shared/ui/Card/Card";
import {Text} from "../../../../shared/ui/Text/Text";

interface NotificationItemProps {
	className?: string
    item: Notification
}

export const NotificationItem = memo((props: NotificationItemProps) => {

    const {
        className,
        item,
    } = props;

    const {t} = useTranslation();

    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={
                classNames(
                    classes.NotificationItem,
                    {},
                    [className])}
        >
            <Text
                title={item.title}
                text={item.description}
            />
        </Card>
    );

    if(item.href) {
        return (
            <a
                className={classes.link}
                target={"_blank"}
                href={item.href} rel="noreferrer"
            >
                {content}
            </a>
        );
    }

    return (
        content
    );
});

