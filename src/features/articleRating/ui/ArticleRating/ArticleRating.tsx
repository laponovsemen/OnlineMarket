import {useTranslation} from "react-i18next";
import {memo, useCallback} from "react";
import {classNames} from "@/shared/lib/classNames/classNames";
import {RatingCard} from "@/entities/Rating";
import {useGetArticleRating, useRateArticle} from "@/features/articleRating/api/articleRatingApi";
import {useSelector} from "react-redux";
import {getUserAuthData} from "@/entities/User";
import {Skeleton} from "@/shared/ui/Skeleton/Skeleton";

export interface ArticleRatingProps {
	className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {

    const {
        className,
        articleId
    } = props;

    const {t} = useTranslation();

    const userData = useSelector(getUserAuthData);
    const {data, isLoading} = useGetArticleRating({
        articleId,
        userId: userData?.id ?? ""
    });

    const [rateArticleMutation] = useRateArticle();

    console.log(data);

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try{
            rateArticleMutation({
                userId: userData?.id ?? "",
                articleId ,
                rate: starsCount,
                feedback: feedback,
            });
        } catch (e) {
            // handle error
            console.error(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if(isLoading) {
        return <Skeleton
            width={"100%"}
            height={120}
        />;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            title={t("Оцените статью")}
            feedbackTitle={t("Оставьте свой отзыв о статье, это поможет улучшить качество")}
            hasFeedback
            rate={rating?.rate}
            className={
                classNames(
                    "",
                    {},
                    [className])}
        />
    );
});

export default ArticleRating;
