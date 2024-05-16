import classes from "./AdminPanelPage.module.scss";
import {classNames} from "@/shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Page} from "@/widget/Page";

interface AdminPanelPageProps {
    className? :string
}

const AdminPanelPage = ({className} : AdminPanelPageProps) => {

    const {t} = useTranslation("admin");


    return (
        <Page
            data-testid={"AdminPanelPage"}
            className={
                classNames(
                    classes.AdminPanelPage,
                    {} ,
                    [className])}
        >
            {t("Админ панель")}
        </Page>
    );
};

export default AdminPanelPage;
