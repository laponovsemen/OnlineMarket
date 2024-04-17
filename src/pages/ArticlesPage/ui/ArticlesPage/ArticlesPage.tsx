import classes from "./ArticlesPage.module.scss";
import {useTranslation} from "react-i18next";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {memo} from "react";

interface ArticlesPageProps {
	className?: string
}

const ArticlesPage = (props: ArticlesPageProps) => {

    const {
        className
    } = props;

    const {t} = useTranslation();

    return (
        <div className={classNames(classes.ArticlesPage, {}, [className])}>
            ARTICLES PAGE
        </div>
    );
};

export default memo(ArticlesPage);
