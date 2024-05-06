import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "../../../../../app/providers/StoreProvider";
import i18n from "../../../../../shared/config/i18n/i18n";
import {Article} from "../../../../../entities/Article";
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType
} from "../../selectors/articlePageSelectors";
import {addQueryParams} from "../../../../../shared/lib/url/addQueryParams/addQueryParams";
import {ArticleType} from "../../../../../entities/Article/model/consts/articleConsts";

interface FetchArticlesListProps {
    replace? : boolean
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
        const sort = getArticlesPageSort(getState());
        const order = getArticlesPageOrder(getState());
        const search = getArticlesPageSearch(getState());
        const page = getArticlesPageNum(getState());
        const type = getArticlesPageType(getState());


        const limit = getArticlesPageLimit(getState());

        /*if(!articleId) {
            return rejectWithValue("no article id was provided");
        }*/

        try {
            addQueryParams({
                sort, order, search, type
            });

            const response = await extra.api.get<Article[]>("/articles", {
                params: {
                    _expand: "user",
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type: type === ArticleType.ALL ? undefined : type
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
