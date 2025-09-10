import { createSlice } from "@reduxjs/toolkit";

export const newSlice = createSlice({
    name: "newNote",
    initialState: {
        content: ""
    },
    reducers: {
        setContent: (state, action) => {
            state.content = action.payload
        }
    }
})

export const { setContent } = newSlice.actions;

export const selectContent = (state) => state.newNote.content

export default newSlice.reducer