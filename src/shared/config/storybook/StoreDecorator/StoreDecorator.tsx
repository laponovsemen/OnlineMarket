import {StateSchema, StoreProvider} from "../../../../app/providers/StoreProvider";
import {loginReducer} from "../../../../features/AuthByUserName";
import {profileReducer} from "../../../../entities/Profile";
import {ReducersList} from "../../../lib/components/DynamicModuleLoader/DynamicModuleLoader";


const defaultAsybcReducers: ReducersList = {  //DeepPartial<ReducersMapObject<StateSchema>>
    loginForm: loginReducer,
    profile: profileReducer
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
