import {StateSchema, StoreProvider} from "../../../../app/providers/StoreProvider";
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit";
import {loginReducer} from "../../../../features/AuthByUserName";


const defaultAsybcReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
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
