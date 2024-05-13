import {StateSchema, StoreProvider} from "@/app/providers/StoreProvider";


import {loginReducer} from "@/features/AuthByUserName/testing";
import {ReducersList} from "../../../lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {articleDetailsReducer} from "@/entities/Article/testing";
import {addCommentFormReducer} from "@/features/addCommentForm/testing";
import {articteDetailsPageReducer} from "@/pages/ArticleDetailsPage/testing";
import {profileReducer} from "@/features/editableProfileCard/testing";


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
