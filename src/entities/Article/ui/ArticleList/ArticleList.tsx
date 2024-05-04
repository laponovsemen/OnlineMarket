import classes from "./ArticleList.module.scss";
import {useTranslation} from "react-i18next";
import {HTMLAttributeAnchorTarget, memo} from "react";
import {Article, ArticleView} from "../../model/types/article";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {ArticleListItem} from "../ArticleListItem/ArticleListItem";
import {ArticleListItemSkeleton} from "../ArticleListItem/ArticleListItemSkeleton";
import {Text, TextSize} from "../../../../shared/ui/Text/Text";
import {List, ListRowProps, WindowScroller} from "react-virtualized";
import {PAGE__ID} from "../../../../widget/Page/Page";

interface ArticleListProps {
	className?: string
    articles: Article[]
    isLoading? : boolean
    view?: ArticleView
    target?: HTMLAttributeAnchorTarget
    virtualized? : boolean
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
        target,
        virtualized = true
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
    const isBig = view === ArticleView.BIG;
    const itemsPerRow = isBig ? 1 : 3;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);


    const rowRenderer = ({index, isScrolling, key, style} : ListRowProps) => {
        console.log("render");

        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for(let i = fromIndex; i < toIndex; i++) {
            items.push(
                <ArticleListItem
                    target={target}
                    article={articles[i]}
                    view={view}
                    className={classes.card}
                    key={articles[i].id}
                />);
        }

        return (
            <div
                key={key}
                style={style}
                className={classes.row}
            >
                {items}
            </div>
        );
    };

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
        <WindowScroller
            onScroll={() => console.log("scroll")}
            scrollElement={document.getElementById(PAGE__ID) as Element}

        >
            {(props) => {
                const {
                    width,
                    height,
                    registerChild,
                    isScrolling,
                    scrollTop,
                    onChildScroll
                } = props;
                return(
                    <div
                        ref={registerChild}
                        className={
                            classNames(
                                classes.ArticleList,
                                {},
                                [className, classes[view]])}
                    >
                        {virtualized
                            ? (
                                <List
                                    height={height ?? 700}
                                    rowCount={rowCount}
                                    rowHeight={isBig ? 700 : 330}
                                    rowRenderer={rowRenderer}
                                    width={width ? width - 80 : 700}
                                    autoHeight
                                    onScroll={onChildScroll}
                                    isScrolling={isScrolling}
                                    scrollTop={scrollTop}
                                />
                            )
                            : (
                                articles.map((item) => (
                                    <ArticleListItem
                                        article={item}
                                        view={view}
                                        target={target}
                                        key={item.id}
                                        className={classes.card}
                                    />
                                ))
                            )}

                        {isLoading && getSkeletons(view)}
                    </div>
                );}
            }
        </WindowScroller>
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
});

