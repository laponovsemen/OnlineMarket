import {StateSchema, StoreProvider} from "../../../../app/providers/StoreProvider";
import {loginReducer} from "../../../../features/AuthByUserName";
import {ReducersList} from "../../../lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsReducer} from "../../../../entities/Article/model/slice/articleDetailsSlice";
import {addCommentFormReducer} from "../../../../features/addCommentForm/model/slices/addCommentFormSlice";
import {articteDetailsPageReducer} from "../../../../pages/ArticleDetailsPage/model/slices";
import {profileReducer} from "../../../../features/editableProfileCard/model/slice/profileSlice";


const defaultAsybcReducers: ReducersList = {  //DeepPartial<ReducersMapObject<StateSchema>>
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articteDetailsPageReducer,

};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList // DeepPartial<ReducersMapObject<StateSchema>>
) => (story : () => any) => {
    return (
        <StoreProvider
            initialState={state}
            asyncReducers={{...defaultAsybcReducers, ...asyncReducers}}
        >
            {story()}
        </StoreProvider>

    );
};
