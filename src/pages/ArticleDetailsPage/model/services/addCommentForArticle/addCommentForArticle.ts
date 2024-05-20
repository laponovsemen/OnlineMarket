import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAuthData } from "../../../../../entities/User";
import i18n from "./../../../../../shared/config/i18n/i18n";
import { ThunkConfig } from "../../../../../app/providers/StoreProvider";
import { Comment } from "../../../../../entities/Comment";
import { getArticleDetailsData } from "../../../../../entities/Article/model/selectors/articleDetails/articleDetails";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<
    Comment,
    string,
    ThunkConfig<string>
>("articleDetails/addCommentForArticle", async (text, thunkAPI) => {
    const { dispatch, extra, rejectWithValue, getState } = thunkAPI;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());
    console.log("hui");
    console.log(userData, text, article);
    if (!userData || !text || !article) {
        return rejectWithValue("no data");
    }
    console.log(userData, text, article);
    try {
        const response = await extra.api.post<Comment>("/comments", {
            articleId: article?.id,
            userId: userData.id,
            text,
        });

        if (!response.data) {
            console.log("error appeard");
            throw new Error();
        }

        dispatch(fetchCommentsByArticleId(article.id));
        return response.data; // по умолчанию оборачивается в fullfilWithValue()
    } catch (e) {
        console.log(e);
        return rejectWithValue(i18n.t("Вы ввели неверный логин или пароль"));
    }
});
