import { configureStore } from "@reduxjs/toolkit"



import ProductsSlice from "./Slice/Products"
import CategoriesSlice from "./Slice/Categories"
import CartSlice from "./Slice/ShopingCart"
import { apiSlice } from "./Slice/Api"

export const Store = configureStore({
  reducer: {
    ProductsSlice,
    CategoriesSlice,
    CartSlice,
    [apiSlice.reducerPath]: apiSlice.reducer

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(apiSlice.middleware),
})

