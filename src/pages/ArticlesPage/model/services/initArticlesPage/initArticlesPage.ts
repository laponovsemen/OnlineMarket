import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "../../../../../app/providers/StoreProvider";
import {getArticlesPageInited} from "../../selectors/articlePageSelectors";
import {articlesPageActions} from "../../slices/articlesPageSlice";
import {fetchArticlesList} from "../fetchArticlesList/fetchArticlesList";


export const initArticlesPage = createAsyncThunk<
	void,
	void,
	ThunkConfig<string>
>(
    "articlesPage/initArticlesPage",
    async (_, thunkAPI) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
            getState
        } = thunkAPI;
        const inited = getArticlesPageInited(getState());

	    if(!inited){
		    dispatch(articlesPageActions.initState());
		    dispatch(fetchArticlesList({
			    page: 1
		    }));
	    }
    }
);
