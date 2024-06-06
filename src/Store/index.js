import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlicer';

const store = configureStore({
    reducer: {
        user: userReducer,
    }
});

export default store;