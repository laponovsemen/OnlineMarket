import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Profile} from "../../../../entities/Profile";
import {fetchProfileData} from "../services/fetchProfileData/fetchProfileData";
import {updateProfileData} from "../services/updateProfileData/updateProfileData";
import {ProfileSchema} from "../types/editableProfileCardSchema";
import {ValidateProfileError} from "../consts/consts";


const initialState: ProfileSchema  = {
    readonly: true,
    data: undefined,
    error: undefined,
    isLoading: false
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setReadonly: (state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload;
        },
        cancelEdit: (state) => {
            state.readonly = true;
            state.form = state.data;
            state.validateError = undefined;
        },
        updateProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (
                state
            ) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>
            ) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
            })
            .addCase(fetchProfileData.rejected, (
                state,
                action: PayloadAction<string | undefined>
            ) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(updateProfileData.pending, (
                state
            ) => {
                state.validateError = undefined;
                state.isLoading = true;
            })
            .addCase(updateProfileData.fulfilled, (
                state,
                action: PayloadAction<Profile>
            ) => {
                state.isLoading = false;
                state.data = action.payload;
                state.form = action.payload;
                state.readonly = true;
                state.validateError = undefined;
            })
            .addCase(updateProfileData.rejected, (
                state,
                action: PayloadAction<ValidateProfileError[] | undefined>
            ) => {
                state.isLoading = false;
                state.validateError = action.payload;
            });

    }
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
