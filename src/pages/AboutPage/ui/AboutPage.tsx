import React from "react";
import { useTranslation } from "react-i18next";
import {Counter} from "../../../entities/Counter";
import {Page} from "../../../widget/Page/Page";

const AboutPage = () => {
    const { t, i18n } = useTranslation("about");

    return (
        <Page>
            {t("О сайте")}
            <Counter/>
        </Page>
    );
};
export default AboutPage;
