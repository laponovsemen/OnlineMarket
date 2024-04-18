import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "../../../../../app/providers/StoreProvider";
import i18n from "../../../../../shared/config/i18n/i18n";
import {Comment} from "../../../../../entities/Comment";

export const fetchCommentsByArticleId = createAsyncThunk<
	Comment[],
	string | undefined,
	ThunkConfig<string>
>(
    "articleDetails/fetchCommentsByArticleId",
    async (articleId, thunkAPI) => {
        const {
            dispatch,
            extra,
            rejectWithValue
        } = thunkAPI;

        if(!articleId) {
            return rejectWithValue("no article id was provided");
        }

        try {

            const response = await extra.api.get<Comment[]>("/comments", {
                params: {
                    articleId,
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
