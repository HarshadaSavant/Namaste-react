import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";

const appStore = configureStore({
    reducer:
    {
        card: cardReducer,
       // user: userReducer,
    }
});

export default appStore;
