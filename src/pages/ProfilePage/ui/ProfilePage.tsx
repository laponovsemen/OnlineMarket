import classes from "./ProfilePage.module.scss";
import {useTranslation} from "react-i18next";
import {classNames} from "../../../shared/lib/classNames/classNames";
import {
    DynamicModuleLoader,
    ReducersList
} from "../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidationErrors,
    profileActions,
    ProfileCard,
    profileReducer, ValidateProfileError
} from "../../../entities/Profile";
import {useCallback, useEffect} from "react";
import {useAppDispatch} from "../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {ProfilePageHeader} from "./ProfilePageHeader/ProfilePageHeader";
import {Currency} from "../../../entities/Currency";
import {Country} from "../../../entities/Country";
import {TextTheme} from "../../../shared/ui/Text/Text";
import {Text} from "../../../shared/ui/Text/Text";
const reducers: ReducersList = {
    profile: profileReducer
};

interface ProfilePageProps {
    className? :string
}

const ProfilePage = ({className} : ProfilePageProps) => {
    const {t} = useTranslation("profile");
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidationErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t("Серверная ошибка при сохранении"),
        [ValidateProfileError.INCORRECT_COUNTRY]: t("Неккоректный регион"),
        [ValidateProfileError.NO_DATA]: t("Данные не указаны"),
        [ValidateProfileError.INCORRECT_USER_DATA]: t("Имя и фамилия обязательны"),
        [ValidateProfileError.INCORRECT_AGE]: t("Неккоректный возраст"),
    };

    useEffect(() => {
        if(__PROJECT__ !== "storybook"){
            dispatch(fetchProfileData());
        }
    }, [dispatch]);

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({first: value || ""}));
    }, [dispatch]);
    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({lastname: value || ""}));

    }, [dispatch]);
    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({city: value || ""}));

    }, [dispatch]);
    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({age: Number(value || 0)}));

    }, [dispatch]);
    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ""}));

    }, [dispatch]);
    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({username: value || ""}));

    }, [dispatch]);
    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({currency: currency }));

    }, [dispatch]);
    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({country: country }));

    }, [dispatch]);


    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
            <div className={classNames(classes.ProfilePage, {} , [className])}>
                {t("PROFILE PAGE")}

                {/*для каждого поля формы свой отдельный
                онченджхендлер это нормально так как нужны
                будут доп функции по типу валидации*/}
                {/*если два раза оборачивать комментарии литералом обьекта то все идет нахуй в ЕррорБаундери*/}
                <ProfilePageHeader/>
                {validateErrors?.length && validateErrors.map(error => (
                    <Text
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[error]}
                        key={error}
                    />
                ))}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstName={onChangeFirstName}
                    onChangeLastName={onChangeLastName}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>

    );
};

export default ProfilePage;
