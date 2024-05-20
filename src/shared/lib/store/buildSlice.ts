import {
    bindActionCreators,
    createSlice,
    CreateSliceOptions,
    SliceCaseReducers,
} from "@reduxjs/toolkit";
import { useAppDispatch } from "../../lib/hooks/useAppDispatch/useAppDispatch";
import { useMemo } from "react";

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string,
>(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options);

    const useActions = (): typeof slice.actions => {
        const dispatch = useAppDispatch();

        // для каждого слайса генерится хук который биндит диспатч к екшенам
        // потом называем хук как нам удобно и используем без вызова диспатча

        // @ts-ignore
        return useMemo(
            () =>
                bindActionCreators(
                    // @ts-ignore
                    slice.actions,
                    dispatch,
                ),
            [dispatch],
        );
    };

    return {
        ...slice,
        useActions,
    };
}
