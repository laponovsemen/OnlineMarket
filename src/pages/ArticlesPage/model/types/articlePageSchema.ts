import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticleView } from "@/entities/Article";
import { ArticleSortField, ArticleType } from "@/entities/Article";
import { SortOrder } from "@/shared/types/sort";

export interface ArticlePageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;
    view: ArticleView;

    _inited: boolean;
    //02:13
    //pagination

    page: number;
    limit: number;
    hasMore: boolean;

    //filters
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
    type: ArticleType;
}
