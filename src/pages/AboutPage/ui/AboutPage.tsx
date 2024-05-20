import React from "react";
import { useTranslation } from "react-i18next";
import { Counter } from "../../../entities/Counter";
import { Page } from "../../../widget/Page/ui/Page";

const AboutPage = () => {
    const { t, i18n } = useTranslation("about");

    return (
        <Page data-testid={"AboutPage"}>
            {t("О сайте")}
            <Counter />
        </Page>
    );
};
export default AboutPage;
