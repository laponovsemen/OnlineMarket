import {StateSchema} from "../../../../../app/providers/StoreProvider";
import {getProfileValidationErrors} from "./getProfileValidationErrors";
import {ValidateProfileError} from "../../consts/consts";

describe("getProfileReadonly.test" , () => {
    test("test with correct data", () => {

        const state: DeepPartial<StateSchema> = {
            profile: {
                validateError: [
                    ValidateProfileError.SERVER_ERROR,
                    ValidateProfileError.NO_DATA,
                    ValidateProfileError.INCORRECT_USER_DATA,
                    ValidateProfileError.INCORRECT_COUNTRY,
                    ValidateProfileError.INCORRECT_AGE,
                ]
            }
        };
        expect(getProfileValidationErrors(state as StateSchema)).toEqual([
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.NO_DATA,
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_AGE,
        ]);
    });
    test("test with empty state", () => {


        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidationErrors(state as StateSchema)).toEqual(undefined);
    });
});

