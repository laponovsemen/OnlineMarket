import { ArticleDetails} from "./ui/ArticleDetails/ArticleDetails";
import {Article, ArticleView} from "./model/types/article";
import {ArticleDetailsSchema} from "./model/types/articleDetailsSchema";
import {ArticleList} from "./ui/ArticleList/ArticleList";
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading
} from "./model/selectors/articleDetails/articleDetails";

export {
    ArticleDetails,
    Article,
    ArticleDetailsSchema,
    ArticleView,
    ArticleList,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
    getArticleDetailsData
};
