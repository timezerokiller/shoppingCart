import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import { getCategories } from "../Redux/Slice/Categories"
import { useSelector, useDispatch } from "react-redux";

import Main from '../Components/Main';


const MyRoutes = () => {
    const dispatch = useDispatch()
    const CategoriesState = useSelector(state => state.CategoriesSlice.categories)
    useEffect(() => {
        dispatch(getCategories())
    }, [])

    return (
        <>
            <Routes>
                <Route path='/' element={<Main />} />
                {CategoriesState[0] && CategoriesState[0].map((category, index) => <Route key={index} path={'/' + category.replace(' ', '')} element={<Main />} />)}
            </Routes>
        </>
    )
}

export default MyRoutes