import {StateSchema, StoreProvider} from "../../../../app/providers/StoreProvider";
import {DeepPartial} from "@reduxjs/toolkit";


export const StoreDecorator = (state: DeepPartial<StateSchema>) => (story : () => any) => {
    return (
        <StoreProvider initialState={state}>
            {story()}
        </StoreProvider>

    );
};
