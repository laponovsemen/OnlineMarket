import classes from "./ArticlesPage.module.scss";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {memo, useCallback} from "react";
import {
    DynamicModuleLoader,
    ReducersList
} from "../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articlesPageReducer} from "../../model/slices/articlesPageSlice";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {Page} from "../../../../widget/Page/ui/Page";
import {
    fetchNextArticlesPage
} from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage";
import {ArticlePageFilter} from "../ArticlePageFilter/ArticlePageFilter";
import {ArticleInfiniteList} from "../ArticleInfiniteList/ArticleInfiniteList";

interface ArticlesPageProps {
	className?: string
}




const reducers : ReducersList = {
    articlesPage : articlesPageReducer
};

const ArticlesPage = (props: ArticlesPageProps) => {

    const {
        className
    } = props;
    const dispatch = useAppDispatch();
    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);




    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount={false}
        >
            <Page
                onScrollEnd={onLoadNextPart}
                className={
                    classNames(
                        classes.ArticlesPage,
                        {},
                        [className])}
            >
                <ArticlePageFilter/>
                <ArticleInfiniteList className={classes.list}/>
            </Page>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
