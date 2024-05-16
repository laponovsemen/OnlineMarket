import classes from "./NotFoundPage.module.scss";
import {classNames} from "../../../shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Page} from "../../../widget/Page/ui/Page";
interface NotFoundPageProps {
    className? :string
}

export const NotFoundPage = ({className} : NotFoundPageProps) => {
    const {t} = useTranslation();

    return (
        <Page
            data-testid={"NotFoundPage"}
            className={
                classNames(
                    classes.NotFoundPage,
                    {} ,
                    [className])}
        >
            {t("Страница не найдена")}
        </Page>
    );
};

