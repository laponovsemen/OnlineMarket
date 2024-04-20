import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "../../../../../app/providers/StoreProvider";
import i18n from "../../../../../shared/config/i18n/i18n";
import {Article} from "../../../../../entities/Article";

export const fetchArticlesList = createAsyncThunk<
	Article[],
	void,
	ThunkConfig<string>
>(
    "articlesPage/fetchArticlesList",
    async (_, thunkAPI) => {
        const {
            dispatch,
            extra,
            rejectWithValue
        } = thunkAPI;

        /*if(!articleId) {
            return rejectWithValue("no article id was provided");
        }*/

        try {

            const response = await extra.api.get<Article[]>("/articles", {
                params: {
                    _expand: "user"
                }
            });
            if(!response.data) {
                throw new Error();
            }
            console.log(response.data, "hui");
            return response.data; // по умолчанию оборачивается в fullfilWithValue()

        }catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t("Вы ввели неверный логин или пароль"));
        }
    }
);
