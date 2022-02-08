import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../Redux/Slice/Products";
import { getCategories } from "../Redux/Slice/Categories"

import MyCard from "./Card";
import useBreadcrumbs from 'use-react-router-breadcrumbs';


import "antd/dist/antd.css";

import { Layout, Menu, Breadcrumb, Row } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, HomeOutlined } from '@ant-design/icons';

import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;





function Main() {
  const breadcrumbs = useBreadcrumbs();

  const dispatch = useDispatch()
  const ProductsState = useSelector(state => state.ProductsSlice.products)
  const CategoriesState = useSelector(state => state.CategoriesSlice.categories)


  useEffect(() => {
    dispatch(getCategories())
    dispatch(getProducts('electronics'))
  }, [])



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
                {ProductsState && ProductsState.map(product => <MyCard key={product.id} {...product} />)}
              </Row>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default Main;