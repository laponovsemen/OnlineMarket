import { ArticleDetails } from "./ui/ArticleDetails/ArticleDetails";
import { Article } from "./model/types/article";
import { ArticleDetailsSchema } from "./model/types/articleDetailsSchema";
import { ArticleList } from "./ui/ArticleList/ArticleList";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from "./model/selectors/articleDetails/articleDetails";
import {
    ArticleBlockType,
    ArticleView,
    ArticleType,
    ArticleSortField,
} from "./model/consts/articleConsts";

export {
    ArticleDetails,
    ArticleList,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
    getArticleDetailsData,
    ArticleView,
    ArticleBlockType,
    ArticleSortField,
    ArticleType,
};
export type { Article, ArticleDetailsSchema };
