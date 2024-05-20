import { EntityState } from "@reduxjs/toolkit";
import { Article } from "../../../../entities/Article";

// todo EntityState<Comment> имеет внутри массив строк "ids" а массив ентити в данном случае комментов
export interface ArticleDetailsReccomendationsSchema
    extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
}
