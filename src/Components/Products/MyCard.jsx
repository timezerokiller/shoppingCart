import React, { useState } from 'react'

import { Card, Col, Button } from 'antd';

const { Meta } = Card;



const MyCard = ({ id, title, description, image, price, dispatch, addNewProductCart, CartState, updateProductInCart }) => {
    const [visible, setVisible] = useState(true)

    const getData = () => {
        let date = new Date();
        let year = date.getFullYear()
        let month = '0' + (date.getMonth() + 1);
        let day = '0' + date.getDate();
        return year + '-' + month + '-' + day
    }

    const addClick = (id) => {
        dispatch(addNewProductCart({
            products: {
                productId: id,
                title: title,
                description: description,
                image: image,
                price: price,
                quality: 1
            }
        }))
    }
    const updClick = (id) => {
        dispatch(updateProductInCart({
            products: {
                productId: id,
                title: title,
                description: description,
                image: image,
                price: price,
                quality: 1
            }
        }))
    }

    return (
        <>
            <Col key={id} span={5} xs={24} md={6}>
                <Card
                    hoverable
                    cover={<img alt={title} src={image} />}
                >
                    <Meta title={title} description={description} />
                    <br />
                    <b>Price: {price}$</b>
                    <br />
                    <br />
                    {visible === true && <Button onClick={(e) => {
                        addClick(id)
                        setVisible(false)
                    }}>Добавить в корзину</Button>}
                    {visible === false && <Button onClick={(e) => {
                        updClick(id)
                    }}>Увеличить колличество</Button>}
                </Card>,
            </Col>
        </>
    )
}

export default MyCard