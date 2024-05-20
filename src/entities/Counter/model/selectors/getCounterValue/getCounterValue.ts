import { buildSelector } from "@/shared/lib/store";

// reselect library is used
// export const getCounterValue = createSelector(
//     getCounter,
//     (counter: CounterSchema) => counter.value
// );

export const [useCounterValue, getCounterValue] = buildSelector(
    (state) => state.counter.value,
);
