import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { getCategories } from "../Redux/Slice/Categories"
import { useSelector, useDispatch } from "react-redux";

import Main from '../Components/Main/Main';
import MyProducts from '../Components/Products/MyProducts';
import MyCart from '../Components/Cart/MyCart';
import Login from '../Components/MyAuth/Login'


const MyRoutes = () => {
    const dispatch = useDispatch()
    const CategoriesState = useSelector(state => state.CategoriesSlice.categories)
    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <>
            <Routes>
                <Route path='/' element={<MyProducts />} />
                <Route path='/cart' element={<MyCart />} />
                <Route path='/login' element={<Login />} />
                {CategoriesState[0] && CategoriesState[0].map((category, index) => <Route key={index} path={'/' + category.replace(' ', '')} element={<MyProducts />} />)}
            </Routes>
        </>
    )
}

export default MyRoutes