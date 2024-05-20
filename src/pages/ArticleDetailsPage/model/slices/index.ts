import { combineReducers } from "@reduxjs/toolkit";
import { ArticleDetailsPageSchema } from "../types";
import { articleDetailsPageReccomendationsReducer } from "./articleDetailsPageReccomendationsSlice";
import { articleDetailsCommentsReducer } from "./articleDetailsCommentsSlice";

export const articteDetailsPageReducer =
    combineReducers<ArticleDetailsPageSchema>({
        recommendations: articleDetailsPageReccomendationsReducer,
        comments: articleDetailsCommentsReducer,
    });
