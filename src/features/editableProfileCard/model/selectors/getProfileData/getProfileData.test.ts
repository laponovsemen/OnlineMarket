import { StateSchema } from "../../../../../app/providers/StoreProvider";
import { getProfileData } from "./getProfileData";
import { Country } from "../../../../../entities/Country";
import { Currency } from "../../../../../entities/Currency";

describe("getProfileData.test", () => {
    test("test with correct data", () => {
        const data = {
            username: "volodia",
            age: 99,
            country: Country.UKRAINE,
            lastname: "poltoratskiy",
            first: "bahaha",
            city: "Toronto",
            currency: Currency.USD,
        };

        const state: DeepPartial<StateSchema> = {
            profile: {
                data,
            },
        };
        expect(getProfileData(state as StateSchema)).toEqual(data);
    });
    test("test with empty state", () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileData(state as StateSchema)).toEqual(undefined);
    });
});
