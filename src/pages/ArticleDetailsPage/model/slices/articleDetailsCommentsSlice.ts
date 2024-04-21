import {
    createEntityAdapter,
    createSlice, EntityState, PayloadAction,
} from "@reduxjs/toolkit";
import {Comment} from "../../../../entities/Comment";
import {StateSchema} from "../../../../app/providers/StoreProvider";
import {ArticleDetailsCommentsSchema} from "../types/ArticleDetailsCommentsSchema";
import {fetchCommentsByArticleId} from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId";
type Book = { bookId: string; title: string }

const commentsAdapter = createEntityAdapter<Comment>({
    // Assume IDs are stored in a field other than `book.id`
    selectId: (comment: Comment) => comment.id,
    // Keep the "all IDs" array sorted based on book titles
    //sortComparer: (a, b) => a.title.localeCompare(b.title),
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => (
        state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
    ));

const articleDetailsCommentsSlice = createSlice({
    name: "articleDetailsCommentsSlice",
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
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
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (
                state,
                action: PayloadAction<Comment[]>
            ) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (
                state,
                action : PayloadAction<string | undefined>) => {
                state.error = action.payload;
                state.isLoading = false;
            });

    }
});


export const {reducer: articleDetailsCommentsReducer} = articleDetailsCommentsSlice;
export const {actions: articleDetailsCommentsActions} = articleDetailsCommentsSlice;


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
