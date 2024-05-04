import {Country} from "../../../../../entities/Country";
import {Currency} from "../../../../../entities/Currency";
import {StateSchema} from "../../../../../app/providers/StoreProvider";
import {getProfileForm} from "./getProfileForm";

describe("getProfileForm.test" , () => {
    test("test with correct data", () => {
        const data = {
            username: "volodia",
            age: 99,
            country: Country.UKRAINE,
            lastname: "poltoratskiy",
            first: "bahaha",
            city: "Toronto",
            currency: Currency.USD
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data
            }
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test("test with empty state", () => {


        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
