import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "../../../../../app/providers/StoreProvider";
import i18n from "../../../../../shared/config/i18n/i18n";
import {Article} from "../../../../../entities/Article";
import {getArticlesPageLimit} from "../../selectors/articlePageSelectors";

interface FetchArticlesListProps {
    page? :number

}

export const fetchArticlesList = createAsyncThunk<
	Article[],
    FetchArticlesListProps,
	ThunkConfig<string>
>(
    "articlesPage/fetchArticlesList",
    async (props, thunkAPI) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
            getState
        } = thunkAPI;

        const {
            page = 1,
        } = props;

        const limit = getArticlesPageLimit(getState());

        /*if(!articleId) {
            return rejectWithValue("no article id was provided");
        }*/

        try {

            const response = await extra.api.get<Article[]>("/articles", {
                params: {
                    _expand: "user",
                    _limit: limit,
                    _page: page
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
