import {useTranslation} from "react-i18next";
import classes from "./EditableProfileCard.module.scss";
import {memo, useCallback} from "react";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {
    ProfileCard,
} from "../../../../entities/Profile";
import {useInitialEffect} from "../../../../shared/lib/hooks/useInitialEffect/useInitialEffect";
import {Currency} from "../../../../entities/Currency";
import {Country} from "../../../../entities/Country";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";
import {
    DynamicModuleLoader,
    ReducersList
} from "../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {profileActions, profileReducer} from "../../model/slice/profileSlice";
import {getProfileForm} from "../../model/selectors/getProfileForm/getProfileForm";
import {getProfileError} from "../../model/selectors/getProfileError/getProfileError";
import {getProfileIsLoading} from "../../model/selectors/getProfileIsLoading/getProfileIsLoading";
import {getProfileReadonly} from "../../model/selectors/getProfileReadonly/getProfileReadonly";
import {
    getProfileValidationErrors
} from "../../model/selectors/getProfileValidationErrors/getProfileValidationErrors";
import {fetchProfileData} from "../../model/services/fetchProfileData/fetchProfileData";
import {EditableProfileCardHeader} from "../EditableProfileCardHeader/EditableProfileCardHeader";
import {VStack} from "../../../../shared/ui/Stack";
import {ValidateProfileError} from "../../model/consts/consts";

const reducers: ReducersList = {
    profile: profileReducer
};

interface EditableProfileCardProps {
    className? : string;
    id: string
}

// eslint-disable-next-line react/display-name
export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {
        className,
        id
    } = props;
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


    useInitialEffect(() => {
        if(id){
            dispatch(fetchProfileData(id));
        }
    });


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
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                gap={"8"}
                max
                className={
                    classNames(
                        classes.EditableProfileCard,
                        {},
                        [className]
                    )
                }>
                <EditableProfileCardHeader />
                {validateErrors?.length && validateErrors.map((error: ValidateProfileError) => (
                    <Text
                        theme={TextTheme.ERROR}
                        text={validateErrorTranslates[error]}
                        key={error}
                        data-testid={"EditableProfileCard.Error"}
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
            </VStack>
        </DynamicModuleLoader>
    );
});
