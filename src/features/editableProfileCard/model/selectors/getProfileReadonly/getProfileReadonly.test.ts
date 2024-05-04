import {StateSchema} from "../../../../../app/providers/StoreProvider";
import {getProfileReadonly} from "./getProfileReadonly";

describe("getProfileReadonly.test" , () => {
    test("test with correct data", () => {

        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true
            }
        };
        expect(getProfileReadonly(state as StateSchema)).toEqual(true);
    });
    test("test with empty state", () => {


        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined);
    });
});
