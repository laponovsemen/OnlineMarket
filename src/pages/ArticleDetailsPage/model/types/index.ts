import { ArticleDetailsCommentsSchema } from "./ArticleDetailsCommentsSchema";
import { ArticleDetailsReccomendationsSchema } from "./ArticleDetailsReccomendationsSchema";

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsReccomendationsSchema;
}
