import React from 'react'

import { Card, Col } from 'antd';

const { Meta } = Card;



const MyCard = ({ id, title, description, image }) => {
    return (
        <>
            <Col key={id} span={5} xs={24} md={6}>
                <Card 
                    hoverable
                    cover={<img alt={title} src={image} />}
                >
                    <Meta title={title} description={description} />
                </Card>,
            </Col>
        </>
    )
}

export default MyCard