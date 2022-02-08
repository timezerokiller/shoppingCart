import {configureStore} from "@reduxjs/toolkit"



import ProductsSlice from "./Slice/Products"
import CategoriesSlice from "./Slice/Categories"

export const Store = configureStore({
    reducer: {
        ProductsSlice,
        CategoriesSlice
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})

