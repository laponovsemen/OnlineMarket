import classes from "./ProfileCard.module.scss";
import {classNames, Mods} from "../../../../shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Text, TextAlign, TextTheme} from "../../../../shared/ui/Text/Text";
import {Button, ButtonTheme} from "../../../../shared/ui/Button/Button";
import {Input} from "../../../../shared/ui/Input/Input";
import {Profile} from "../../model/types/profile";
import {Loader} from "../../../../shared/ui/Loader";
import {Avatar} from "../../../../shared/ui/Avatar/Avatar";
import {Select} from "../../../../shared/ui/Select/Select";
import {Currency} from "../../../Currency/model/types/currency";
import {CurrencySelect} from "../../../Currency/ui/CurrencySelect/CurrencySelect";
import {Country} from "../../../Country/model/types/country";
import {CountrySelect} from "../../../Country";

interface ProfileCardProps {
    className? :string
    data? : Profile
    error?: string
    isLoading? : boolean
    readonly ? : boolean
    onChangeLastName? : (value? : string) => void
    onChangeFirstName? : (value? : string) => void
    onChangeCity? : (value? : string) => void
    onChangeAge? : (value? : string) => void
    onChangeCurrency? : (value : Currency) => void
    onChangeCountry? : (value : Country) => void
    onChangeUsername? : (value? : string) => void
    onChangeAvatar? : (value? : string) => void

}

export const ProfileCard = (props : ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error,
        onChangeLastName,
        onChangeFirstName,
        onChangeCity,
        onChangeAge,
        onChangeCountry,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        readonly
    } = props;
    const {t} = useTranslation("profile");
    // где подключаем редьюсер?
    // const data = useSelector(getProfileData);
    // const error = useSelector(getProfileError);
    // const isLoading = useSelector(getProfileIsLoading);

    if(isLoading) {
        return (
            <div className={
                classNames(
                    classes.ProfileCard,
                    {[classes.loading]: true} ,
                    [className])}
            >
                <Loader/>
            </div>
        );
    }
    if(error) {
        return (
            <div className={
                classNames(
                    classes.ProfileCard,
                    {} ,
                    [className, classes.error])}
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t("Произошла ошибка при загрузке профиля")}
                    text={t("Попробуйте обновить страницу")}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods: Mods = {
        [classes.editing]: !readonly
    };
    return (
        <div className={classNames(classes.ProfileCard, mods , [className])}>

            <div className={classes.data}>
                {data?.avatar && <div className={classes.avatarWrapper}>
                    <Avatar
                        size={400}
                        src={data?.avatar}
                        alt={"Здесь должен быть Ваш аватар"}
                    />
                </div>}
                <Input
                    value={data?.first}
                    placeholder={t("Ваше имя")}
                    className={classes.input}
                    onChange={onChangeFirstName}
                    readonly={readonly}
                />
                <Input
                    value={data?.username}
                    placeholder={t("Введите имя пользователя")}
                    className={classes.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t("Введите ссылку на аватар")}
                    className={classes.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t("Ваше фамилия")}
                    className={classes.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    placeholder={t("Ваш возраст")}
                    className={classes.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.country}
                    placeholder={t("Ваша страна")}
                    className={classes.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t("Ваш город")}
                    className={classes.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                {/*<Input
                    value={data?.currency}
                    placeholder={t("Ваша валюта")}
                    className={classes.input}
                    onChange={onChangeLastName}
                    readonly={readonly}
                />*/}

                <CurrencySelect
                    className={classes.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    className={classes.input}
                    value={data?.country}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};

