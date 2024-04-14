import classes from "./LoginForm.module.scss";
import {useTranslation} from "react-i18next";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {Button, ButtonTheme} from "../../../../shared/ui/Button/Button";
import {Input} from "../../../../shared/ui/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {memo, useCallback} from "react";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {Text, TextTheme} from "../../../../shared/ui/Text/Text";

interface LoginFormProps {
    className? :string
}

export const LoginForm = memo(({className} : LoginFormProps) => {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {password, username , isLoading, error} = useSelector(getLoginState);

    const onChangeUsername = useCallback((value) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}));
    }, [dispatch, username, password]);

    return (
        <div
            className={
                classNames(
                    classes.LoginForm,
                    {} ,
                    [className])
            }
        >
            <Text title={t("Форма авторизации")}/>
            {error && <Text
                text={error}
                theme={TextTheme.ERROR}
            />}

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
    );
});

