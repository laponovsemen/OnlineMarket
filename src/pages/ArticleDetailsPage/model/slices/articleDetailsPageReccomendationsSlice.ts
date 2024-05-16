import {
    createEntityAdapter,
    createSlice, PayloadAction,
} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../app/providers/StoreProvider";
import {ArticleDetailsReccomendationsSchema} from "../types/ArticleDetailsReccomendationsSchema";
import {Article} from "../../../../entities/Article";
import {
    fetchArticleRecommendations
} from "../services/fetchArticleRecommendations/fetchArticleRecommendations";
type Book = { bookId: string; title: string }

const recommendationsAdapter = createEntityAdapter<Article>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (article: Article) => article.id,
    // Keep the "all IDs" array sorted based on book titles
    //sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const getArticleReccomendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => (
        state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
    ));

const articleDetailsPageReccomendationsSlice = createSlice({
    name: "articleDetailsCommentsSlice",
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsReccomendationsSchema>({
        isLoading: false,
        ids: [],
        error: undefined,
        entities: {}
    }),
    reducers: {
        // Can pass adapter functions directly as case reducers.  Because we're passing this
        // as a value, `createSlice` will auto-generate the `bookAdded` action type / creator
        //bookAdded: booksAdapter.addOne,
        //booksReceived(state, action) {
        //    // Or, call them as "mutating" helpers in a case reducer
        //    booksAdapter.setAll(state, action.payload.books);
        //},
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleRecommendations.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleRecommendations.fulfilled, (
                state,
                action
            ) => {
                state.isLoading = false;
                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticleRecommendations.rejected, (
                state,
                action : PayloadAction<string | undefined>) => {
                state.error = action.payload;
                state.isLoading = false;
            });

    }
});


export const {
    reducer: articleDetailsPageReccomendationsReducer
} = articleDetailsPageReccomendationsSlice;
export const {
    actions: articleDetailsPageReccomendationsActions
} = articleDetailsPageReccomendationsSlice;


/*
type RootState = ReturnType<typeof store.getState>

console.log(store.getState().books);
// { ids: [], entities: {} }

// Can create a set of memoized selectors based on the location of this entity state
const booksSelectors = booksAdapter.getSelectors<RootState>(
    (state) => state.books
);

// And then use the selectors to retrieve values
const allBooks = booksSelectors.selectAll(store.getState());
*/
