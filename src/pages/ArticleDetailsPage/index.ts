import { ArticleDetailsPageAsync } from "./ui/ArticleDetailsPage/ArticleDetailsPage.async";
import { ArticleDetailsCommentsSchema } from "./model/types/ArticleDetailsCommentsSchema";
import { ArticleViewSelector } from "../../features/ArticleViewSelector/ui/ArticleViewSelector/ArticleViewSelector";
import { ArticleDetailsReccomendationsSchema } from "./model/types/ArticleDetailsReccomendationsSchema";
import { ArticleDetailsPageSchema } from "./model/types";

export { ArticleDetailsPageAsync as ArticleDetailsPage, ArticleViewSelector };
export type {
    ArticleDetailsCommentsSchema,
    ArticleDetailsReccomendationsSchema,
    ArticleDetailsPageSchema,
};
