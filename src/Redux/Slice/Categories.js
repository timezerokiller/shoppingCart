import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

let initialState = {
    categories: []
}

export const getCategories = createAsyncThunk(
    'Categories/getCategories',
    async (_, { dispatch }) => {
        const res = await axios.get('https://fakestoreapi.com/products/categories')
        return res
    }
)


export const CategoriesSlice = createSlice({
    name: 'Categories',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.categories.push(action.payload.data)
        })
    }
})



export default CategoriesSlice.reducer