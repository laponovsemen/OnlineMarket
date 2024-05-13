import {createAsyncThunk} from "@reduxjs/toolkit";
import {User, userActions} from "../../../../../entities/User";
import i18n from "./../../../../../shared/config/i18n/i18n";
import {USER_LOCALSTORAGE_KEY} from "../../../../../shared/const/localStorage";
import {ThunkConfig} from "../../../../../app/providers/StoreProvider";

interface LoginByUsernameProps {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    "login/loginByUsername",
    async ({username, password}, thunkAPI) => {
        const {
            dispatch,
            extra,
            rejectWithValue
        } = thunkAPI;

        try {

            console.log(username, password);
            const response = await extra.api.post<User>("/login", {
                username, password
            });

            if (!response.data) {
                console.log("error appeard");
                throw new Error();
            }
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data; // по умолчанию оборачивается в fullfilWithValue()
        }catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t("Вы ввели неверный логин или пароль"));
        }
    }
);
