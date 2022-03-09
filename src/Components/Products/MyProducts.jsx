import React from 'react'


import { Row } from 'antd';

// Карточки товаров
import MyCard from "./MyCard"


// запросы
import { useSelector, useDispatch } from "react-redux";
import { addProductInCart, updateProductInCart } from "../../Redux/Slice/ShopingCart";

function MyProducts() {

    const dispatch = useDispatch()

    const ProductsState = useSelector(state => state.ProductsSlice.products)
    const CartState = useSelector(state => state.CartSlice.Cart)



    return (
        <>
            <Row gutter={16}>
                {ProductsState
                    ? ProductsState.map(product =>
                        <MyCard
                            key={product.id} {...product}
                            CartState={CartState}
                            dispatch={dispatch}
                            addNewProductCart={addProductInCart}
                            updateProductInCart={updateProductInCart}

                        />)
                    : <h3>Загрузка</h3>
                }
            </Row>
        </>
    )
}

export default MyProducts
