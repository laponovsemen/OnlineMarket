import classes from "./ProfileCard.module.scss";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {getProfileData} from "../../model/selectors/getProfileData/getProfileData";
import {getProfileError} from "../../model/selectors/getProfileError/getProfileError";
import {getProfileIsLoading} from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import {Text} from "../../../../shared/ui/Text/Text";
import {Button, ButtonTheme} from "../../../../shared/ui/Button/Button";
import {Input} from "../../../../shared/ui/Input/Input";

interface ProfileCardProps {
    className? :string
}

export const ProfileCard = ({className} : ProfileCardProps) => {
    const {t} = useTranslation("profile");
    // где подключаем редьюсер?
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    return (
        <div className={classNames(classes.ProfileCard, {} , [className])}>
            <div className={classes.header}>
                <Text title={t("Профиль")}/>
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={classes.editBtn}
                >
                    {t("Редактировать")}
                </Button>
            </div>
            <div className={classes.data}>
                <Input
                    value={data?.first}
                    placeholder={t("Ваше имя")}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваше фамилия")}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваше фамилия")}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваше фамилия")}
                />
            </div>
        </div>
    );
};

