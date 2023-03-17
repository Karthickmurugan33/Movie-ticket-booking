
import { configureStore, createSlice } from "@reduxjs/toolkit";

let initialState = { seatData: [] };
let slice = createSlice({
    name: "seatData",
    initialState: initialState,
    reducers: {
        seat(state, action) {
            state.seatData = action.payload;
        }
    }
});

export let act = slice.actions;

let store = configureStore({ reducer: { ui: slice.reducer } });

export default store;
