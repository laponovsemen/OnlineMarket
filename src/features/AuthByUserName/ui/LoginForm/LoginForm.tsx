import classes from "./LoginForm.module.scss";
import {useTranslation} from "react-i18next";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {Button} from "../../../../shared/ui/Button/Button";
import {Input} from "../../../../shared/ui/Input/Input";

interface LoginFormProps {
    className? :string
}

export const
    LoginForm = ({className} : LoginFormProps) => {
        const {t} = useTranslation();

        return (
            <div
                className={
                    classNames(
                        classes.LoginForm,
                        {} ,
                        [className])
                }
            >
                <Input
                    type={"text"}
                    className={classes.input}
                    placeholder={t("Введите username")}
                    autofocus
                />
                <Input
                    type={"text"}
                    className={classes.input}
                    placeholder={t("Введите пароль")}
                />

                <Button className={classes.loginBtn}>
                    {t("Войти")}
                </Button>
            </div>
        );
    };

