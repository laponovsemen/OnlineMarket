import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleList } from "../../../../entities/Article";
import { useAppDispatch } from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { getArticles } from "../../model/slices/articlesPageSlice";
import {
    getArticlesPageError,
    getArticlesPageIsLoading,
    getArticlesPageView,
} from "../../model/selectors/articlePageSelectors";
import { useSearchParams } from "react-router-dom";
import { useInitialEffect } from "../../../../shared/lib/hooks/useInitialEffect/useInitialEffect";
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage";
import { Text } from "../../../../shared/ui/Text/Text";

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const error = useSelector(getArticlesPageError);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();
    const { t } = useTranslation();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    if (error) {
        return <Text text={t("Ошибка при загрузке статьи")} />;
    }

    const { className } = props;

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
