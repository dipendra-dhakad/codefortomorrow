import { configureStore } from "@reduxjs/toolkit";
// import ProductSlice from "./slices/ProductSlice";
import ProductSlice from "./slices/ProductSlices";
import PageItems from "./slices/PageItems";


export const store = configureStore({
    reducer:{
        items: ProductSlice,
        pageItems: PageItems
    }
})