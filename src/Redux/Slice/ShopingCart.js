import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
    Cart: [],
}



export const CartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addProductInCart: (state, action) => {
            state.Cart.push(action.payload.products)
        },
        updateProductInCart: (state, action) => {
            state.Cart.forEach(element => {
                if(element.productId = action.payload.products.productId) {
                    element.quality = element.quality + action.payload.products.quality
                }
            });
        },
        deleteProductInCart: (state,action) => {
            state.Cart = state.Cart.filter((product) => product.productId != action.payload)
        },
        deleteAllProductInCart: (state,action) => {
            for(let i = 0; i < action.payload.length; i++) {
                state.Cart = state.Cart.filter((product) => product.productId != action.payload[i])
            }
        },
        incrimentQualityProductCart: (state, action) => {
            let i = action.payload
            state.Cart[i].quality = state.Cart[i].quality + 1
               
        },
        decrimentQualityProductCart: (state, action) => {
            let i = action.payload
            state.Cart[i].quality = state.Cart[i].quality - 1
        }
    }
})

export const { addProductInCart, updateProductInCart, deleteProductInCart, deleteAllProductInCart ,incrimentQualityProductCart, decrimentQualityProductCart } = CartSlice.actions

export default CartSlice.reducer