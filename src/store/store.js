import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import modalSlice from "./modalSlice";
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        category: categorySlice,
        modal: modalSlice,
        product: productSlice
    }
});


export default store;