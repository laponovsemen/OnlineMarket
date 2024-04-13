import {StateSchema} from "../../../../../app/providers/StoreProvider";
import {createSelector} from "@reduxjs/toolkit";
import {getCounter} from "../getCounter/getCounter";
import {CounterSchema} from "../../types/counterSchema";


// reselect library is used
export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value
);
