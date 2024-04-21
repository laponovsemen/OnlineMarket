import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "../../../../../app/providers/StoreProvider";
import i18n from "../../../../../shared/config/i18n/i18n";
import {Article} from "../../../../../entities/Article";
import {addQueryParams} from "../../../../../shared/lib/url/addQueryParams/addQueryParams";

export const fetchArticleRecommendations = createAsyncThunk<
	Article[],
	void,
	ThunkConfig<string>
>(
    "articleDetailsPage/fetchArticleRecommendations",
    async (_, thunkAPI) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
            getState
        } = thunkAPI;


        try {
            const response = await extra.api.get<Article[]>("/articles", {
                params: {
                    _expand: "user",
	                _limit: 4
                }
            });
            if(!response.data) {
                throw new Error();
            }
            return response.data; // по умолчанию оборачивается в fullfilWithValue()

        }catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t("Вы ввели неверный логин или пароль"));
        }
    }
);
