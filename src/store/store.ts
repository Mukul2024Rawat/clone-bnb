import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./slices/searchSlice";

export const store=configureStore({
    reducer:{
        search:searchReducer,

    }
})

//types  of state and dispatch

export type RootState=ReturnType<typeof store.getState>
export type AppDispatch= typeof store.dispatch

export default store;