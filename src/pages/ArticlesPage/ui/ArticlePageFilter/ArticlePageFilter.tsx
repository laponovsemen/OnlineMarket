import classes from "./ArticlePageFilter.module.scss";
import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {ArticleViewSelector} from "../../../../features/ArticleViewSelector/ui/ArticleViewSelector/ArticleViewSelector";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {ArticleView} from "../../../../entities/Article";
import {articlesPageActions} from "../../model/slices/articlesPageSlice";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useSelector} from "react-redux";
import {
    getArticlesPageOrder, getArticlesPageSearch,
    getArticlesPageSort, getArticlesPageType,
    getArticlesPageView
} from "../../model/selectors/articlePageSelectors";
import {Card} from "../../../../shared/ui/Card/Card";
import {Input} from "../../../../shared/ui/Input/Input";
import {ArticleSortSelector} from "../../../../features/ArticleSortSelector/ui/ArticleSortSelector/ArticleSortSelector";
import {SortOrder} from "../../../../shared/types";
import {fetchArticlesList} from "../../model/services/fetchArticlesList/fetchArticlesList";
import {useDebounce} from "../../../../shared/lib/hooks/useDebounce/useDebounce";
import {ArticleTypeTabs} from "../../../../features/ArticleTypeTabs/ui/ArticleTypeTabs/ArticleTypeTabs";
import {ArticleSortField, ArticleType} from "../../../../entities/Article/model/consts/articleConsts";

interface ArticlePageFilterProps {
	className?: string
}

export const ArticlePageFilter = memo((props: ArticlePageFilterProps) => {

    const {
        className
    } = props;

    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({replace: true}));
    }, [dispatch]);

    const debounceFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlesPageActions.setSort(newSort));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlesPageActions.setOrder(newOrder));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    }, [dispatch, debounceFetchData]);

    const onChangeType = useCallback((type: ArticleType) => {
        dispatch(articlesPageActions.setType(type as ArticleType));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    const {t} = useTranslation();



    return (
        <div className={classNames(classes.ArticlePageFilter, {}, [className])}>
            <div className={classes.sortWrapper}>

                <ArticleSortSelector
                    sort={sort}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                    order={order}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <Card className={classes.search}>
                <Input
                    onChange={onChangeSearch}
                    value={search}
                    placeholder={t("Поиск")}
                />
            </Card>
            <ArticleTypeTabs
                onChangeType={onChangeType}
                value={type}
                className={classes.tabs}
            />
        </div>
    );
});

