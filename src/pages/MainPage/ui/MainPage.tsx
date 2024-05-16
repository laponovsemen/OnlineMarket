import React, { useState } from "react";
import {useTranslation} from "react-i18next";
// eslint-disable-next-line semen-the-sailor-plugin/layer-imports
import {BugButton} from "@/app/providers/ErrorBoundary";
import {Input} from "@/shared/ui/Input";
import {Page} from "@/widget/Page/ui/Page";
import {HStack} from "@/shared/ui/Stack";
import {ListBox} from "@/shared/ui/Popups";
import {RatingCard} from "@/entities/Rating";

const MainPage = () => {
    const {t} = useTranslation();
    const [value, setValue] = useState("");
    return (
        <Page
            data-testid={"MainPage"}
        >
            <BugButton/>
            {t("Главная страница")}
            <Input
                placeholder={t("Введите текст")}
                value={value}
                onChange={setValue}
            />

            <HStack>
                <ListBox
                    defaultValue={"Выберите значение"}
                    onChange={(value: string) => {
                        console.log(value);
                    }}
                    value={""}
                    items={[
                        {value: "1", content: "some content 1"},
                        {value: "2", content: "some content 2"},
                        {value: "3", content: "some content 3", disabled: true},
                        {value: "4", content: "some content 4"},
                    ]}
                />
            </HStack>

            {/*<StarRating*/}
            {/*    size={50}*/}
            {/*/>*/}
            <RatingCard
                title={t("Как вам статья?")}
                feedbackTitle={t("Оставьте отзыв о статье")}
                hasFeedback
            />


        </Page>
    );
};
export default MainPage;
