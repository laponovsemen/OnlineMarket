import React, { useState } from "react";
import {useTranslation} from "react-i18next";
import {BugButton} from "../../../app/providers/ErrorBoundary";
import {Counter} from "../../../entities/Counter";
import {Input} from "../../../shared/ui/Input/Input";

const MainPage = () => {
    const {t} = useTranslation();
    const [value, setValue] = useState("");
    return (
        <div>
            <BugButton/>
            {t("Главная страница")}
            <Input
                placeholder={t("Введите текст")}
                value={value}
                onChange={setValue}
            />
        </div>
    );
};
export default MainPage;
