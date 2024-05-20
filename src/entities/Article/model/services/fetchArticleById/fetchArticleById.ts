import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider";
import i18n from "../../../../../shared/config/i18n/i18n";
import { Article } from "../../types/article";

export const fetchArticleById = createAsyncThunk<
    Article,
    string | undefined,
    ThunkConfig<string>
>("article/fetchArticleById", async (articleId, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;

    try {
        if (!articleId) {
            throw new Error();
        }

        const response = await extra.api.get<Article>(
            `/articles/${articleId}`,
            {
                params: {
                    _expand: "user",
                },
            },
        );
        if (!response.data) {
            throw new Error();
        }
        return response.data; // по умолчанию оборачивается в fullfilWithValue()
    } catch (e) {
        console.log(e);
        return rejectWithValue(i18n.t("Вы ввели неверный логин или пароль"));
    }
});
