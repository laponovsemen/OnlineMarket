import {StoreProvider} from "./ui/StoreProvider";
import {createReduxStore} from "./config/store";
import type {StateSchema} from "./config/StateSchema";
// для того чтобы редакс работал все
// приложение нужно обернуть в провайдер
// провайдеры глобально мы создаем на уровне провайдерс апп

export {
    StoreProvider,
    createReduxStore,
    StateSchema
};
