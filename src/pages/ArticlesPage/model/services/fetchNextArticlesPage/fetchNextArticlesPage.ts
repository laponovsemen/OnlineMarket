import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "../../../../../app/providers/StoreProvider";
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageLimit,
    getArticlesPageNum
} from "../../selectors/articlePageSelectors";
import {articlesPageActions} from "../../slices/articlesPageSlice";
import {fetchArticlesList} from "../fetchArticlesList/fetchArticlesList";


export const fetchNextArticlesPage = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>(
    "articlesPage/fetchNextArticlesPage",
    async (_, thunkAPI) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
            getState
        } = thunkAPI;


        const hasMore = getArticlesPageHasMore(getState());
        const page = getArticlesPageNum(getState());
        const limit = getArticlesPageLimit(getState());
        const isLoading = getArticlesPageIsLoading(getState());

	    if(hasMore && !isLoading) {
		    dispatch(articlesPageActions.setPage(page + 1));
		    dispatch(fetchArticlesList({}));
	    }


    }
);
