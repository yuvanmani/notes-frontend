import { createSlice } from "@reduxjs/toolkit";

export const editSlice = createSlice({
    name: "update",
    initialState: {
        content: ""
    },
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload;
        }
    }
})

export const { setContent } = editSlice.actions;

export const selectContent = (state) => state.update.content;

export default editSlice.reducer