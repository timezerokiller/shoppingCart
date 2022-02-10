import React, { useEffect } from "react"
import { Link } from "react-router-dom";



// запросы
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../Redux/Slice/Products";
import { getCategories } from "../../Redux/Slice/Categories"



// Дизайн
import { Layout, Menu} from 'antd';
const { Header} = Layout;
////


function MyHeader() {
    const dispatch = useDispatch()
    const CategoriesState = useSelector(state => state.CategoriesSlice.categories)

    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts('electronics')) // по умолчанию
    }, [])
    return (
        <>
            <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal">
                    {CategoriesState[0] && CategoriesState[0].map((category, index) =>
                        <Menu.Item key={index} onClick={() => { dispatch(getProducts(category)) }}>
                            <Link to={'/' + category.replace(' ', '')}>
                                {category}
                            </Link>
                        </Menu.Item>)}
                </Menu>
            </Header>
        </>
    )
}

export default MyHeader
