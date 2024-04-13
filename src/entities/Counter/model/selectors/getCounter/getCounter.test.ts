import {getCounter} from "./getCounter";
import {DeepPartial} from "@reduxjs/toolkit";
import {StateSchema} from "../../../../../app/providers/StoreProvider";

describe("getCounter" , () => {
    test("should return counter value", () => {
        // DeepPartial используется в тестах для обьявления в стейте только
        // части полей - которые нам нужны в тестах

        const state: DeepPartial<StateSchema> = {
            counter: {
                value: 10
            }
        };

        expect(getCounter(state as StateSchema)).toEqual({value: 10});
    });
});

