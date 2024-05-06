import { ArticleDetails} from "./ui/ArticleDetails/ArticleDetails";
import {Article} from "./model/types/article";
import {ArticleDetailsSchema} from "./model/types/articleDetailsSchema";
import {ArticleList} from "./ui/ArticleList/ArticleList";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "./model/selectors/articleDetails/articleDetails";
import {ArticleView} from "./model/consts/articleConsts";

export {
    ArticleDetails, ArticleView,
    ArticleList,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
    getArticleDetailsData
};
export type {
    Article,
    ArticleDetailsSchema
};

