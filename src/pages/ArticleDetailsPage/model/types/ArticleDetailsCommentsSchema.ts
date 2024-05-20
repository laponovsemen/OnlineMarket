import { Comment } from "../../../../entities/Comment";
import { EntityState } from "@reduxjs/toolkit";

// todo EntityState<Comment> имеет внутри массив строк "ids" а массив ентити в данном случае комментов
export interface ArticleDetailsCommentsSchema extends EntityState<Comment> {
    isLoading?: boolean;
    error?: string;
}
