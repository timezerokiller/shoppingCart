import React from 'react'

import { Form, Input, Button, Checkbox, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useCookies, withCookies, Cookies } from 'react-cookie';



function Login({cookies}) {

    const [cookie, setCookie] = useCookies(['login']);

    console.log(cookies.get('login')) 


    const onFinish = (values) => {
        setCookie('login', true)
        console.log('Received values of form: ', values);
        
    };



    return (
        <><Col md={6} xs={24}>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </Col>
        </>
    )
}


export default withCookies(Login)
