import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { act } from "react-dom/cjs/react-dom-test-utils.production.min";

let initialState = {
    Cart: {
        products: []
    }
}

export const addNewProductCart = createAsyncThunk(
    'Cart/addNewProductCart',
    async (products, { dispatch }) => {
        let url = `https://fakestoreapi.com/carts`
        const res = await axios.post(url, products)
        return res
    }
)


export const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(addNewProductCart.fulfilled, (state, action) => {
                state.Cart = {
                    ...action.payload.data,
                    products: [...state.Cart.products, action.payload.data.products]

                }
            })
            .addCase(addNewProductCart.pending, (state, action) => {
                //state.cart = null
            })
    }
})



export default CartSlice.reducer