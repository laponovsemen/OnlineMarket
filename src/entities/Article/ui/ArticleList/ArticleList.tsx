import classes from "./ArticleList.module.scss";
import { useTranslation } from "react-i18next";
import { HTMLAttributeAnchorTarget, memo } from "react";
import { ArticleView } from "../../model/consts/articleConsts";
import { classNames } from "@/shared/lib/classNames/classNames";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";
import { Text, TextSize } from "@/shared/ui/Text";
import { Article } from "../../model/types/article";

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => {
    return new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={classes.card}
                key={index}
                view={view}
            />
        ));
};

export const ArticleList = memo(
    (props: ArticleListProps) => {
        const {
            className,
            view = ArticleView.SMALL,
            articles,
            isLoading,
            target,
        } = props;

        const { t } = useTranslation();

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

        /*const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                target={target}
                article={article}
                view={view}
                className={classes.card}
                key={article.id}
            />
        );
    };*/

        if (!isLoading && !articles.length) {
            return (
                <div
                    className={classNames(classes.ArticleList, {}, [
                        className,
                        classes[view],
                    ])}
                >
                    <Text
                        size={TextSize.L}
                        title={t("Статьи не найдены")}
                    />
                </div>
            );
        }

        return (
            <div
                data-testid={"ArticleList"}
                className={classNames(classes.ArticleList, {}, [
                    className,
                    classes[view],
                ])}
            >
                {articles.map((item) => (
                    <ArticleListItem
                        article={item}
                        view={view}
                        target={target}
                        key={item.id}
                        className={classes.card}
                    />
                ))}
                {isLoading && getSkeletons(view)}
            </div>
        );
    },
    // <div
    //     className={
    //         classNames(
    //             classes.ArticleList,
    //             {},
    //             [className, classes[view]])}
    // >
    //     {articles.length
    //         ? articles.map(renderArticle)
    //         : null
    //     }
    //     {isLoading && getSkeletons(view)}
    // </div>
);
