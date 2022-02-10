import React from "react"

// Дизайн
import { Layout } from 'antd';
import MyBreadcrumb from "../Breadcrumb/MyBreadcrumb";
import MyRoutes from "../../Routes/MyRoutes";


const { Content } = Layout;

function MyContent() {

    return (
        <>
            <Content style={{ padding: '0 50px' }}>
                    <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <MyBreadcrumb />
                            <MyRoutes />
                        </Content>
                    </Layout>
                </Content>
        </>
    )
}

export default MyContent
