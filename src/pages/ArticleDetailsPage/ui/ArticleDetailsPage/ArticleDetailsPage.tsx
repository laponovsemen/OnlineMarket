import classes from "./ArticleDetailsPage.module.scss";
import {classNames} from "../../../../shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import React, {memo, useCallback} from "react";
import {ArticleDetails} from "../../../../entities/Article";
import {useParams} from "react-router-dom";
import {Text} from "../../../../shared/ui/Text/Text";
import {CommentList} from "../../../../entities/Comment";
import {
    DynamicModuleLoader,
    ReducersList
} from "../../../../shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
    articleDetailsCommentsReducer,
    getArticleComments
} from "../../model/slices/articleDetailsCommentsSlice";
import {useSelector} from "react-redux";
import {getArticleCommentsIsLoading} from "../../model/selectors/comments";
import {useInitialEffect} from "../../../../shared/lib/hooks/useInitialEffect/useInitialEffect";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    fetchCommentsByArticleId
} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import AddCommentForm from "../../../../features/addCommentForm/ui/AddCommentForm";
import {addCommentForArticle} from "../../model/services/addCommentForArticle/addCommentForArticle";

// todo для того чтобы i18next extract plugin работал нужно создать помимо файлов в названии которых есть неймспейс прокидываемый в юзТранслейшн но и этот файл уже должен содержать пустой джсон обьект
interface ArticleDetailsPageProps {
	className?: string
}

const reducers : ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const {className} = props;
    const dispatch = useAppDispatch();
    const {t} = useTranslation("article-details");
    const {id} = useParams<{id: string}>(); // шоб взять айди из урла
    const comments = useSelector(getArticleComments.selectAll);
    const isLoading = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    if(!id) {
        return (
            <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
                {t("Статья не найдена")}
            </div>
        );
    }

    return (
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount // чтобы после ухода со страницы участок стейта также удалялся
        >
            <div className={classNames(classes.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails
                    id={id}
                />
                <Text
                    className={classes.commentTitle}
                    title={t("Комментарии")}
                />
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </div>
        </DynamicModuleLoader>
    );
};
// в асинк компоненте простой импорт не работает
export default memo(ArticleDetailsPage);