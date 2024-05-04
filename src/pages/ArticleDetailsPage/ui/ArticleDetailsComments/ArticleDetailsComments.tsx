
import {useTranslation} from "react-i18next";
import React, {memo, useCallback} from "react";
import {Text, TextSize} from "../../../../shared/ui/Text/Text";
import AddCommentForm from "../../../../features/addCommentForm/ui/AddCommentForm";
import {CommentList} from "../../../../entities/Comment";
import {useSelector} from "react-redux";
import {getArticleComments} from "../../model/slices/articleDetailsCommentsSlice";
import {getArticleCommentsIsLoading} from "../../model/selectors/comments";
import {addCommentForArticle} from "../../model/services/addCommentForArticle/addCommentForArticle";
import {useAppDispatch} from "../../../../shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
    fetchCommentsByArticleId
} from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import {useInitialEffect} from "../../../../shared/lib/hooks/useInitialEffect/useInitialEffect";

interface ArticleDetailsCommentsProps {
	className?: string
    id: string
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const dispatch = useAppDispatch();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const {
        className,
        id
    } = props;

    const {t} = useTranslation();

    useInitialEffect(()=> {
        dispatch(fetchCommentsByArticleId(id));
    });

    return (
        <div>
            <Text
                size={TextSize.L}
                title={t("Комментарии")}
            />
            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList
                isLoading={commentsIsLoading}
                comments={comments}
            />
        </div>
    );
});

