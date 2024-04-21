import classes from "./ArticleList.module.scss";
import {useTranslation} from "react-i18next";
import {HTMLAttributeAnchorTarget, memo} from "react";
import {Article, ArticleView} from "../../model/types/article";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {ArticleListItem} from "../ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "../ArticleListItem/ArticleListItemSkeleton";
import {Text, TextSize} from "../../../../shared/ui/Text/Text";

interface ArticleListProps {
	className?: string
    articles: Article[]
    isLoading? : boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget

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
        isLoading,
        target
    } = props;

    const {t} = useTranslation();

    /*if(isLoading) {
        return (
            <div
                className={classNames(
                    classes.ArticleList,
                    {},
                    [className, classes[view]])}>
                {getSkeletons(view)}
            </div>);
    }*/

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                target={target}
                article={article}
                view={view}
                className={classes.card}
                key={article.id}
            />
        );
    };

    if(!isLoading && !articles.length) {
        return (
            <div
                className={
                    classNames(
                        classes.ArticleList,
                        {},
                        [className, classes[view]])}
            >
                <Text size={TextSize.L} title={t("Статьи не найдены")} />
            </div>
        );
    }

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
            {isLoading && getSkeletons(view)}
        </div>
    );
});
