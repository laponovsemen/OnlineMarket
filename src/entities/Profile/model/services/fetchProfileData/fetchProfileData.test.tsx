import {TestAsyncThunk} from "../../../../../shared/lib/tests/TestAsyncThunk/TestAsyncThunk";
import {fetchProfileData} from "./fetchProfileData";
import {Currency} from "../../../../Currency";
import {Country} from "../../../../Country";

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
describe("fetchProfileData.test" , () => {
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


    test("access ", async () => {
        const userValue = {username: "123", id: "1"};
        // mockedAxios.post.mockReturnValue(
        //     Promise.resolve({data : userValue})
        // );

        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({data : data}));
        const result = await thunk.callThunk();



        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe("fulfilled");
        expect(result.payload).toEqual(data);
    });

    test("error", async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(
            Promise.resolve({status: 403})
        );
        const result = await thunk.callThunk();


        expect(result.meta.requestStatus).toBe("rejected");
    });
});
