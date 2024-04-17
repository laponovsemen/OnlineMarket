import classes from "./ArticleDetailsPage.module.scss";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {memo} from "react";

interface ArticleDetailsPageProps {
	className?: string
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {className} = props;
    const {t} = useTranslation("article");
    return (
        <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
            ARTICLE DETAILS PAGE
        </div>
    );
};
// в асинк компоненте простой импорт не работает
export default memo(ArticleDetailsPage);
