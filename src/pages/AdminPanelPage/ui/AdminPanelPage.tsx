import classes from "./AdminPanelPage.module.scss";
import {classNames} from "../../../shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";

interface AdminPanelPageProps {
    className? :string
}

const AdminPanelPage = ({className} : AdminPanelPageProps) => {

    const {t} = useTranslation("admin");


    return (
        <div className={classNames(classes.AdminPanelPage, {} , [className])}>
            {t("Админ панель")}
        </div>
    );
};

export default AdminPanelPage;
