import { StateSchema } from "../../../../../app/providers/StoreProvider";
import { getProfileError } from "./getProfileError";

describe("getProfileError.test", () => {
    test("test with correct data", () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                error: "123",
            },
        };
        expect(getProfileError(state as StateSchema)).toEqual("123");
    });
    test("test with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileError(state as StateSchema)).toEqual(undefined);
    });
});
