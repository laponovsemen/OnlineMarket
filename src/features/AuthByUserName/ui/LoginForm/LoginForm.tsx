import classes from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { classNames } from "../../../../shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "../../../../shared/ui/Button/Button";
import { Input } from "../../../../shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "../../../../shared/ui/Text/Text";
import { getLoginPassword } from "../../model/selectors/getLoginPassword/getLoginPassword";
import { getLoginUsername } from "../../model/selectors/getLoginUsername/getLoginUsername";
import { getLoginError } from "../../model/selectors/getLoginError/getLoginError";
import { getLoginIsLoading } from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {
    DynamicModuleLoader,
    ReducersList,
} from "../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
    className?: string;
    onSuccess?: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const password = useSelector(getLoginPassword);
    const username = useSelector(getLoginUsername);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback(
        (value: string) => {
            dispatch(loginActions.setUsername(value));
        },
        [dispatch],
    );

    const onChangePassword = useCallback(
        (value: string) => {
            dispatch(loginActions.setPassword(value));
        },
        [dispatch],
    );

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username, password }));
        console.log(result);
        if (result.meta.requestStatus === "fulfilled") {
            onSuccess?.();
        }
    }, [onSuccess, dispatch, username, password]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
            <div className={classNames(classes.LoginForm, {}, [className])}>
                <Text title={t("Форма авторизации")} />
                {error && (
                    <Text
                        text={error}
                        theme={TextTheme.ERROR}
                    />
                )}

                <Input
                    type={"text"}
                    className={classes.input}
                    placeholder={t("Введите username")}
                    autofocus
                    onChange={onChangeUsername}
                    value={username}
                />
                <Input
                    type={"text"}
                    className={classes.input}
                    placeholder={t("Введите пароль")}
                    onChange={onChangePassword}
                    value={password}
                />

                <Button
                    disabled={isLoading}
                    className={classes.loginBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onLoginClick}
                >
                    {t("Войти")}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
