import React, { useEffect } from "react"
import { Link, useLocation } from "react-router-dom";



// запросы
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/Slice/Products";
import { getCategories } from "../Redux/Slice/Categories"
import { addNewProductCart } from "../Redux/Slice/ShopingCart";

import MyCard from "./Card";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
////


// Дизайн
import style from './Main.module.css'
import "antd/dist/antd.css";

import { Layout, Menu, Breadcrumb, Row } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
////




function Main() {

    const breadcrumbs = useBreadcrumbs();

    const dispatch = useDispatch()
    const ProductsState = useSelector(state => state.ProductsSlice.products)
    const CategoriesState = useSelector(state => state.CategoriesSlice.categories)
    const CartState = useSelector(state => state.CartSlice.Cart)


    useEffect(() => {
        dispatch(getCategories())
        dispatch(getProducts('electronics')) // по умолчанию
    }, [])

    console.log(CartState)
    let totalProductsCart = CartState.products.length



    return (
        <div className="App">
            <Layout>
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
                <Content style={{ padding: '0 50px' }}>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                {breadcrumbs.map(({ breadcrumb }, index) =>
                                    <Breadcrumb.Item key={index}>
                                        {breadcrumb}
                                    </Breadcrumb.Item>)}
                            </Breadcrumb>
                            <Row gutter={16}>
                                {ProductsState
                                    ? ProductsState.map(product => <MyCard key={product.id} {...product} dispatch={dispatch} addNewProductCart={addNewProductCart} />)
                                    : <h3>Загрузка</h3>
                                }
                            </Row>
                        </Content>
                    </Layout>
                </Content>
                <div className={style.fixedWidgets}>
                    <ShoppingCartOutlined style={{ fontSize: "40px", marginTop: "10px", color: "white" }} />
                    <span style={{ fontSize: "30px", color: "white" }} >
                        {totalProductsCart}
                    </span>
                </div>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </div>
    );
}

export default Main;