import classes from "./ProfilePageHeader.module.scss";
import {Text} from "../../../../shared/ui/Text/Text";
import {Button, ButtonTheme} from "../../../../shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {getProfileData, getProfileReadonly, profileActions, updateProfileData} from "../../../../entities/Profile";
import {useDispatch, useSelector} from "react-redux";
import { useCallback } from "react";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {getUserAuthData} from "../../../../entities/User";

interface ProfilePageHeaderProps {
    className? :string
}

export const ProfilePageHeader = ({className} : ProfilePageHeaderProps) => {
    const {t} = useTranslation("profile");
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(classes.ProfilePageHeader, {} , [className])}>
            <Text title={t("Профиль")}/>
            {canEdit && (
                <div className={classes.btnWrapper}>
                    {readonly
                        ? (
                            <Button
                                theme={ButtonTheme.OUTLINE}
                                className={classes.editBtn}
                                onClick={onEdit}
                            >
                                {t("Редактировать")}
                            </Button>)
                        : (
                            <>
                                <Button
                                    theme={ButtonTheme.OUTLINE_RED}
                                    className={classes.editBtn}
                                    onClick={onCancelEdit}
                                >
                                    {t("Отменить")}
                                </Button>
                                <Button
                                    theme={ButtonTheme.OUTLINE}
                                    className={classes.saveBtn}
                                    onClick={onSave}
                                >
                                    {t("Сохранить")}
                                </Button>
                            </>
                        )

                    }</div>
            )}
        </div>
    );
};


