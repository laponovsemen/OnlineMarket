import {
    CombinedState,
    configureStore,
    Reducer,
    ReducersMapObject,
} from "@reduxjs/toolkit";
import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { counterReducer } from "../../../../entities/Counter";
import { userReducer } from "../../../../entities/User";
import { createReducerManager } from "./reducerManager";
import { $api } from "../../../../shared/api/api";
import { scrollRestorationReducer } from "../../../../features/scrollRestoration";
import { rtkApi } from "../../../../shared/api/rtkApi";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    //navigate?: (to: To, options? : NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollRestoration: scrollRestorationReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const extraArg: ThunkExtraArg = {
        api: $api,
        //navigate: navigate
    };

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg, // для того чтобы в thunkApi был аксиос
                },
            }).concat(rtkApi.middleware),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
