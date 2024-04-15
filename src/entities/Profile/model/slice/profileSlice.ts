import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {USER_LOCALSTORAGE_KEY} from "../../../../shared/const/localStorage";
import {ProfileSchema} from "../types/profile";



const initialState: ProfileSchema  = {
    readonly: true,
    data: undefined,
    error: undefined,
    isLoading: false
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {}
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
