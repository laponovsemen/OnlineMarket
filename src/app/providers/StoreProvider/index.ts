import { StoreProvider } from "./ui/StoreProvider";
import { createReduxStore, AppDispatch } from "./config/store";
import type {
    StateSchema,
    ReduxStoreWithManager,
    StateSchemaKey,
} from "./config/StateSchema";

import { ThunkConfig } from "./config/StateSchema";

// для того чтобы редакс работал все
// приложение нужно обернуть в провайдер
// провайдеры глобально мы создаем на уровне провайдерс апп
export { StoreProvider, createReduxStore, StateSchema, ReduxStoreWithManager };
export type { AppDispatch, ThunkConfig, StateSchemaKey };
