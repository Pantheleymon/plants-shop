import { configureStore } from "@reduxjs/toolkit";
import plants from '../slices/plants'

const store = configureStore({
    reducer: {plants},
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;