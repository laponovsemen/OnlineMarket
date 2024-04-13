import {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store";
import {StateSchema} from "../config/StateSchema";
import {DeepPartial} from "@reduxjs/toolkit";

interface StoreProviderProps {
    children?: ReactNode
    initialState? :DeepPartial<StateSchema>
}
// используется для связки реакт и редакс
export const StoreProvider = (props : StoreProviderProps) => {
    const {
        initialState,
        children
    } = props;

    const store = createReduxStore(initialState as StateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

