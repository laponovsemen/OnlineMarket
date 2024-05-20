import { rtkApi } from "../../../shared/api/rtkApi";
import { Article } from "../../../entities/Article";

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query<Article[], number>({
            query: (limit) => ({
                url: "/articles",
                params: {
                    _limit: limit,
                },
            }),
        }),
        createArticleRecommendation: build.mutation({
            query: (limit) => ({
                url: "/articles",
                params: {
                    _limit: limit,
                },
                method: "PUT",
            }),
        }),
    }),
});
// eslint-disable-next-line max-len
export const useArticleRecommendationsList =
    recommendationsApi.useGetArticleRecommendationsListQuery;
export const useCreateRecommendation =
    recommendationsApi.useCreateArticleRecommendationMutation;
