import {ScrollRestorationSchema} from "../types/scrollRestorationSchema";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState : ScrollRestorationSchema = {
    scroll: {}
};

export const scrollRestorationSlice = createSlice({
    name: "scrollRestorationSlice",
    initialState,
    reducers: {
        setScrollPosition: (state, action: PayloadAction<{path: string, position: number}>) => {
            state.scroll[action.payload.path] = action.payload.position;
        }
    }
});


// action creators are generated for each case reducer function
export const {actions: scrollRestorationActions} = scrollRestorationSlice;
export const {reducer: scrollRestorationReducer} = scrollRestorationSlice;
