import React, { useState } from "react";
import {useTranslation} from "react-i18next";
import {BugButton} from "../../../app/providers/ErrorBoundary";
import {Counter} from "../../../entities/Counter";
import {Input} from "../../../shared/ui/Input/Input";
import {Page} from "../../../shared/ui/Page/Page";

const MainPage = () => {
    const {t} = useTranslation();
    const [value, setValue] = useState("");
    return (
        <Page>
            <BugButton/>
            {t("Главная страница")}
            <Input
                placeholder={t("Введите текст")}
                value={value}
                onChange={setValue}
            />
        </Page>
    );
};
export default MainPage;
