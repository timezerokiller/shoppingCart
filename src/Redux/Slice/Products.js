import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

let initialState = {
    products: [],
}

export const getProducts = createAsyncThunk(
    'Products/getProducts',
    async (category, { dispatch }) => {
        let url = `https://fakestoreapi.com/products/category/${category}`
        const res = await axios.get(url)
        return res
    }
)


export const ProductsSlice = createSlice({
    name: 'Products',
    initialState,
    reducers: {
         resetProductsInCart: (state, action) => {
             state.productsInCart = []
         }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.fulfilled, (state, action) => {
            state.products = action.payload.data
        })
        .addCase(getProducts.pending, (state, action) => {
            state.products = null
        })
    }
})


export const { resetProductsInCart } = ProductsSlice.actions


export default ProductsSlice.reducer
