import {FC, lazy, Suspense} from "react";
import {ArticleRatingProps} from "@/features/articleRating/ui/ArticleRating/ArticleRating";
import {Skeleton} from "@/shared/ui/Skeleton";

export const ArticleRatingLazy = lazy(() => import("./ArticleRating"));


export const ArticleRatingAsync = (props: ArticleRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width={"100%"} height={120}/>}>
            <ArticleRatingLazy {...props}/>
        </Suspense>
    );
};
