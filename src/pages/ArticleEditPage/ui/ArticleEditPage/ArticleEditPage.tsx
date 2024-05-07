import classes from "./ArticleEditPage.module.scss";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {Page} from "../../../../widget/Page/Page";
import {useParams} from "react-router-dom";

interface ArticleEditPageProps {
	className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {

    const {
        className
    } = props;

    const {t} = useTranslation();

    const {id} = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(classes.ArticleEditPage, {}, [className])}>
            {isEdit
                ? t("Редактирование статьи с ID ") + id
                : t("Создание новой статьи")}
        </Page>
    );
});


export default ArticleEditPage;
