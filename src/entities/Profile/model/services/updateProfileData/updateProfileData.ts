import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "../../../../../app/providers/StoreProvider";
import i18n from "../../../../../shared/config/i18n/i18n";
import {Profile} from "../../types/profile";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {getProfileForm} from "../../selectors/getProfileForm/getProfileForm";


export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    "profile/updateProfileData",
    async (_, thunkAPI) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
            getState
        } = thunkAPI;

        const formData = getProfileForm(getState());

        try {

            const response = await extra.api.put<Profile>("/profile", formData);
            return response.data; // по умолчанию оборачивается в fullfilWithValue()
        }catch (e) {
            console.log(e);
            return rejectWithValue(i18n.t("Вы ввели неверный логин или пароль"));
        }
    }
);
