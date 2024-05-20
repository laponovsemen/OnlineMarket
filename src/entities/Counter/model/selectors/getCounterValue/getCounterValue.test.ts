import { StateSchema } from "../../../../../app/providers/StoreProvider";
import { getCounterValue } from "./getCounterValue";

describe("getCounterValue", () => {
    test("should return counter value", () => {
        // DeepPartial используется в тестах для обьявления в стейте только
        // части полей - которые нам нужны в тестах

        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10,
            },
        };

        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
