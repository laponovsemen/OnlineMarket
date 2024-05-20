import { CounterSchema } from "../types/counterSchema";
import { buildSlice } from "@/shared/lib/store";
import { PayloadAction } from "@reduxjs/toolkit";

const initialState: CounterSchema = { value: 0 };

const counterSlice = buildSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state) {
            state.value++;
        },
        addFive(state, { payload }: PayloadAction<number>) {
            state.value += payload;
        },
        decrement(state) {
            state.value--;
        },
    },
});

export const {
    actions: counterActions,
    reducer: counterReducer,
    useActions: useCounterActions,
} = counterSlice;
