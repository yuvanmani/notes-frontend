import { configureStore } from "@reduxjs/toolkit"
import registerReducer from "../features/auth/registerSlice"
import verifyReducer from "../features/auth/verifySlice"
import loginReducer from "../features/auth/loginSlice"
import profileReducer from "../features/auth/meSlice"
import newNoteReducer from "../features/notes/newSlice"
import updateReducer from "../features/notes/editSlice"

const store = configureStore({
    reducer: {
        register: registerReducer,
        verify: verifyReducer,
        login: loginReducer,
        profile: profileReducer,
        newNote: newNoteReducer,
        update: updateReducer
    }
})

export default store