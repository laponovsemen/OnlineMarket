import classes from "./ArticlesPage.module.scss";
import {useTranslation} from "react-i18next";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {memo, useCallback} from "react";
import {Article, ArticleList, ArticleView} from "../../../../entities/Article";
import {
    DynamicModuleLoader,
    ReducersList
} from "../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articlesPageActions, articlesPageReducer, getArticles} from "../../model/slices/articlesPageSlice";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {useInitialEffect} from "../../../../shared/lib/hooks/useInitialEffect/useInitialEffect";
import {fetchArticlesList} from "../../model/services/fetchArticlesList/fetchArticlesList";
import {useSelector} from "react-redux";
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView
} from "../../model/selectors/articlePageSelectors";
import {ArticleViewSelector} from "../../../../entities/Article/ui/ArticleViewSelector/ArticleViewSelector";

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
    const articles = useSelector(getArticles.selectAll);

    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const isLoading = useSelector(getArticlesPageIsLoading);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlesPageActions.setView(view));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlesPageActions.initState());
    });

    const {t} = useTranslation();

    return (
        <DynamicModuleLoader
            reducers={reducers}
        >
            <div className={classNames(classes.ArticlesPage, {}, [className])}>
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
                <ArticleList
                    isLoading={isLoading}
                    view={view}
                    articles={articles}/>
            </div>
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
