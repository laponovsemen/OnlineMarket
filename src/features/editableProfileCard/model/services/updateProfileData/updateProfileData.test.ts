import { TestAsyncThunk } from "../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import { Currency } from "../../../../../entities/Currency";
import { Country } from "../../../../../entities/Country/model/types/country";
import { updateProfileData } from "./updateProfileData";
import { ValidateProfileError } from "../../consts/consts";

// todo валятся импорты если импортировать каунтри из паблик апи Володя помоги

const data = {
    id: "1",
    username: "volodia",
    age: 99,
    country: Country.UKRAINE,
    lastname: "poltoratskiy",
    first: "bahaha",
    city: "Toronto",
    currency: Currency.USD,
};
describe("updateProfileData.test", () => {
    test("access ", async () => {
        const userValue = { username: "123", id: "1" };
        // mockedAxios.post.mockReturnValue(
        //     Promise.resolve({data : userValue})
        // );

        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data: data }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    });

    test("validate error", async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form: { ...data, lastname: "" },
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe("rejected");
        expect(result.payload).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
});
