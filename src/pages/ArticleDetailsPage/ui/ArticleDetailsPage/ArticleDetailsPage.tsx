import classes from "./ArticleDetailsPage.module.scss";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import React, {memo} from "react";
import {ArticleDetails} from "../../../../entities/Article";
import {useParams} from "react-router-dom";


// todo для того чтобы i18next extract plugin работал нужно создать помимо файлов в названии которых есть неймспейс прокидываемый в юзТранслейшн но и этот файл уже должен содержать пустой джсон обьект
interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {className} = props;
    const {t} = useTranslation("article-details");
    const {id} = useParams<{id: string}>(); // шоб взять айди из урла

    if(!id) {
        return (
            <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
                {t("Статья не найдена")}
            </div>
        );
    }

    return (
        <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
            <ArticleDetails
                id={id}
            />
        </div>
    );
};
// в асинк компоненте простой импорт не работает
export default memo(ArticleDetailsPage);
