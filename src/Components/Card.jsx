import React from 'react'

import { Card, Col, Button } from 'antd';

const { Meta } = Card;



const MyCard = ({ id, title, description, image, price, dispatch, addNewProductCart }) => {

    const getData =() => {
        let date = new Date();
        let year = date.getFullYear()
        let month ='0' + (date.getMonth() + 1); 
        let day ='0' + date.getDate(); 
        return year + '-' + month + '-' + day
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
                    <Button onClick={() => dispatch(addNewProductCart({
                        userId: 1,
                        date: '2022-02-08',
                        products: [{ productId: id, quality: 1 }]
                    }))}>Добавить в корзину</Button>
                </Card>,
            </Col>
        </>
    )
}

export default MyCard