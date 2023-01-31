import { configureStore } from "@reduxjs/toolkit";

import userReducer from './actions/userSlice';

export default configureStore({
    reducer:  {
        user: userReducer
    },
});