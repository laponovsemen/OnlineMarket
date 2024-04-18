import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "../../../../../app/providers/StoreProvider";
import i18n from "../../../../../shared/config/i18n/i18n";
import {Profile} from "../../types/profile";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


export const fetchProfileData = createAsyncThunk<
    Profile,
    string,
    ThunkConfig<string>
>(
    "profile/fetchProfileData",
    async (profileId, thunkAPI) => {
        const {
            dispatch,
            extra,
            rejectWithValue
        } = thunkAPI;

        try {

            const response = await extra.api.get<Profile>(`/profile/${profileId}`);
            if(!response.data) {
                throw new Error();
            }
            return response.data; // по умолчанию оборачивается в fullfilWithValue()

        }catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t("Вы ввели неверный логин или пароль"));
        }
    }
);
