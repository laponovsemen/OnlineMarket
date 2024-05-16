// eslint-disable-next-line semen-the-sailor-plugin/layer-imports
import {
    StateSchema
} from "@/app/providers/StoreProvider";
import {useSelector} from "react-redux";


type Selector<T> = (state: StateSchema) => T;
type Result<T> = [() => T, Selector<T>]

export function buildSelector<T>(selector: Selector<T>) : Result<T>{
    const useSelectorHook = () => {
        return useSelector(selector);
    };

    // 02 20

    return [useSelectorHook, selector];
}
