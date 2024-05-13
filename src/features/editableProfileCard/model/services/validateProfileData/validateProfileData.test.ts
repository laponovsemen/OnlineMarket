import {Currency} from "../../../../../entities/Currency";
import {Country} from "../../../../../entities/Country/model/types/country";
import {validateProfileData} from "./validateProfileData";
import {ValidateProfileError} from "../../consts/consts";


// todo валятся импорты если импортировать каунтри из паблик апи Володя помоги


const data = {
    username: "volodia",
    age: 99,
    country: Country.UKRAINE,
    lastname: "poltoratskiy",
    first: "bahaha",
    city: "Toronto",
    currency: Currency.USD
};
describe("validateProfileData.test" , () => {
    // let dispatch: Dispatch;
    // let getState: () => StateSchema;
    //
    // beforeEach(() => {
    //     dispatch = jest.fn();
    //     getState = jest.fn();
    // });
    //
    // test("access login", async () => {
    //     const userValue = {username: "123", id: "1"};
    //
    //     mockedAxios.post.mockReturnValue(
    //         Promise.resolve({data : userValue})
    //     );
    //     const action = loginByUsername({username: "123", password: "123"});
    //     const result = await action(dispatch, getState, undefined);
    //     console.log(result);
    //
    //     expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    //     expect(dispatch).toHaveBeenCalledTimes(3);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe("fullfiled");
    //     expect(result.payload).toBe(userValue);
    // });
    //
    // test("error login", async () => {
    //     const userValue = {username: "123", id: "1"};
    //
    //     mockedAxios.post.mockReturnValue(
    //         Promise.resolve({status: 403})
    //     );
    //     const action = loginByUsername({username: "123", password: "123"});
    //     const result = await action(dispatch, getState, undefined);
    //     console.log(result);
    //
    //     expect(dispatch).toHaveBeenCalledTimes(2);
    //     expect(mockedAxios.post).toHaveBeenCalled();
    //     expect(result.meta.requestStatus).toBe("rejected");
    //     expect(result.payload).toBe("error");
    // });


    test("success",  () => {
        const result = validateProfileData(data);
        expect(result).toEqual([]);
    });

    test("without first name and last name", async () => {
        const result = validateProfileData({...data, first: "", lastname: ""});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA
        ]);
    });

    test("incorrect age", async () => {
        const result = validateProfileData({...data, age: undefined});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE
        ]);
    });

    test("incorrect country", async () => {
        const result = validateProfileData({...data, country: undefined});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY
        ]);
    });

    test("incorrect all", async () => {
        const result = validateProfileData({});
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_USER_DATA,
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });
});
