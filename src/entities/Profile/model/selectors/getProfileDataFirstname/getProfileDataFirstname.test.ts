import {Country} from "../../../../Country";
import {Currency} from "../../../../Currency";
import {StateSchema} from "../../../../../app/providers/StoreProvider";
import {getProfileDataFirstname} from "./getProfileDataFirstname";

describe("getProfileFirstname.test" , () => {
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
                data
            }
        };
        expect(getProfileDataFirstname(state as StateSchema)).toEqual(data.first);
    });
    test("test with empty state", () => {


        const state: DeepPartial<StateSchema> = {};
        expect(getProfileDataFirstname(state as StateSchema)).toEqual(undefined);
    });
});
