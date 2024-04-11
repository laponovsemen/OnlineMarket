import classes from "./BugButton.module.scss";
import {Button} from "../../../../shared/ui/Button/Button";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

interface BugButtonProps {
    className? :string
}
// кнопка для тестирования ErrorBoundary
export const BugButton = ({className} : BugButtonProps) => {
    // todo спросить у вовчика как избежать дефолтного вывода ошибок в браузере
    const [error, setError] = useState(false);
    const {t} = useTranslation();

    const onThrow = () => setError(true);


    useEffect(() => {
        if(error){
            throw new Error();
        }

    }, [error]);

    return (
        <Button
            onClick={onThrow}
            className={classNames(
                "",
                {} ,
                [className])}
        >
            {t("выкинуть ошибку")}
        </Button>
    );
};

