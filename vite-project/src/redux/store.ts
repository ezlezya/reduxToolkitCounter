import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reuducer";

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export type StateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch