import {StateSchema, StoreProvider} from "../../../../app/providers/StoreProvider";
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit";
import {loginReducer} from "../../../../features/AuthByUserName";
import {profileReducer} from "../../../../entities/Profile";


const defaultAsybcReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
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
