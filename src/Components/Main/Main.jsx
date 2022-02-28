import React, { useEffect } from "react"
import { Link } from "react-router-dom";



// запросы
import { useSelector, useDispatch } from "react-redux";



// Дизайн
import style from '../Main.module.css'
import "antd/dist/antd.css";

import { Layout } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import MyHeader from "./MyHeader";
import MyContent from "./MyContent";


const { Footer } = Layout;




function Main() {

    const dispatch = useDispatch()

    const CartState = useSelector(state => state.CartSlice.Cart)

    let totalProductsInCart = CartState.length


    return (
        <div className="App">
            <Layout>
                <MyHeader />
                <MyContent />
                <Link to={'/cart'}>
                    <div className={style.fixedWidgets}>
                        <ShoppingCartOutlined style={{ fontSize: "40px", marginTop: "10px", color: "white" }} />

                        <span style={{ fontSize: "30px", color: "white", paddingTop: "6px" }} >
                            {totalProductsInCart}
                        </span>
                    </div>
                </Link>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    );
}

export default Main;