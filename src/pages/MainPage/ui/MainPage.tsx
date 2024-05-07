import React, { useState } from "react";
import {useTranslation} from "react-i18next";
import {BugButton} from "../../../app/providers/ErrorBoundary";
import {Counter} from "../../../entities/Counter";
import {Input} from "../../../shared/ui/Input/Input";
import {Page} from "../../../widget/Page/Page";
import {HStack} from "../../../shared/ui/Stack";
import {ListBox} from "../../../shared/ui/Popups/components/ListBox/ListBox";

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

            <div>jdsfjsdfj</div>
            <div>jdsfjsdfj</div>
            <div>jdsfjsdfj</div>
            <HStack>
                <div>jdsfjsdfj</div>
                <ListBox
                    defaultValue={"Выберите значение"}
                    onChange={(value: string) => {}}
                    value={""}
                    items={[
                        {value: "1", content: "some content 1"},
                        {value: "2", content: "some content 2"},
                        {value: "3", content: "some content 3", disabled: true},
                        {value: "4", content: "some content 4"},
                    ]}
                />
            </HStack>
            <div>jdsfjsdfj</div>
            <div>jdsfjsdfj</div>
            <div>jdsfjsdfj</div>
            <div>jdsfjsdfj</div>
        </Page>
    );
};
export default MainPage;
