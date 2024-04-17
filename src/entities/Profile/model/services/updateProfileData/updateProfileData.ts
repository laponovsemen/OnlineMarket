import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "../../../../../app/providers/StoreProvider";
import {Profile, ValidateProfileError} from "../../types/profile";
import {Simulate} from "react-dom/test-utils";
import {getProfileForm} from "../../selectors/getProfileForm/getProfileForm";
import {validateProfileData} from "../validateProfileData/validateProfileData";


export const updateProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<ValidateProfileError[]>
>(
    "profile/updateProfileData",
    async (_, thunkAPI) => {
        const {
            dispatch,
            extra,
            rejectWithValue,
            getState
        } = thunkAPI;

        const formData = getProfileForm(getState());

        const errors = validateProfileData(formData);

        if(errors.length) {
            return rejectWithValue(errors);
        }

        try {

            const response = await extra.api.put<Profile>("/profile", formData);

            if(!response.data) {
                throw new Error();
            }

            return response.data; // по умолчанию оборачивается в fullfilWithValue()
        }catch (e) {
            console.log(e);
            return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
        }
    }
);
