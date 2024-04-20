import classes from "./ArticleList.module.scss";
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {Article, ArticleView} from "../../model/types/article";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {ArticleListItem} from "../ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
	className?: string
    articles: Article[]
    isLoading? : boolean
    view?: ArticleView
}

const getSkeletons = (view: ArticleView) => {
    return (new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={classes.card}
                key={index}
                view={view}
            />
        )));
};

export const ArticleList = memo((props: ArticleListProps) => {

    const {
        className,
        view = ArticleView.SMALL,
        articles,
        isLoading
    } = props;

    const {t} = useTranslation();

    if(isLoading) {
        return (
            <div
                className={classNames(
                    classes.ArticleList,
                    {},
                    [className, classes[view]])}>
                {getSkeletons(view)}
            </div>);
    }

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                article={article}
                view={view}
                className={classes.card}
                key={article.id}
            />
        );
    };

    return (
        <div
            className={
                classNames(
                    classes.ArticleList,
                    {},
                    [className, classes[view]])}
        >
            {articles.length
                ? articles.map(renderArticle)
                : null
            }
        </div>
    );
});

