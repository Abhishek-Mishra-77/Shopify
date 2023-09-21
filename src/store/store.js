import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "./categorySlice";
import modalSlice from "./modalSlice";
import productSlice from "./productSlice";
import cartSlice from "./cartSlice";


const store = configureStore({
    reducer: {
        category: categorySlice,
        modal: modalSlice,
        product: productSlice,
        cart: cartSlice
    }
});


export default store;