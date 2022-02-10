import React, { useEffect, useState, useMemo } from 'react'

import { useSelector, useDispatch } from "react-redux";
import { deleteProductInCart, incrimentQualityProductCart, decrimentQualityProductCart, deleteAllProductInCart } from "../../Redux/Slice/ShopingCart"

import { Table, Button } from "antd"

import { PlusOutlined, MinusOutlined } from "@ant-design/icons"


function MyCart() {
    const [selectedRowKeys, setSelectedRowKeys] = useState([])

    const dispatch = useDispatch()

    const CartState = useSelector(state => state.CartSlice.Cart)


    const columns = [
        {
            title: 'Название',
            dataIndex: 'title',
        },
        {
            title: 'Описание',
            dataIndex: 'body',
        },
        {
            title: 'Цена',
            dataIndex: 'price',
            sorter: {
                compare: (a, b) => a.price - b.price,
                multiple: 1,
            },
        },
        {
            title: 'Картинка',
            dataIndex: 'image',
        },
        {
            title: 'Каличество',
            dataIndex: 'quality',
        },
        {
            title: '',
            dataIndex: 'delete',
        },
    ];

    const data = []
    for (let i = 0; i < CartState.length; i++) {
        data.push({
            key: CartState[i].productId,
            title: CartState[i].title,
            body: CartState[i].description,
            price: CartState[i].price,
            image: <img style={{ height: "200px" }} src={CartState[i].image} />,
            quality: <>
                <span style={{ display: "block", textAlign: "center", width: "100px", fontSize: "25px" }}><b>{CartState[i].quality}</b></span>
                {CartState[i].quality > 1 && <Button onClick={() => dispatch(decrimentQualityProductCart(i))} style={{ display: "block", margin: "0 auto", float: "right" }}><MinusOutlined /></Button>}
                <Button onClick={() => dispatch(incrimentQualityProductCart(i))} style={{ display: "block", margin: "0 auto", float: "right" }}><PlusOutlined /></Button>
            </>,
            delete: <Button onClick={() => dispatch(deleteProductInCart(CartState[i].productId))} >Удалить</Button>
        });
    }

    const onSelectChange = (selectedRowKeys, val) => {
        setSelectedRowKeys(selectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
        selections: [
            Table.SELECTION_ALL,
            Table.SELECTION_INVERT,
            Table.SELECTION_NONE,
            {
                key: 'odd',
                text: 'Select Odd Row',
                onSelect: changableRowKeys => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return false;
                        }
                        return true;
                    });
                    selectedRowKeys({ selectedRowKeys: newSelectedRowKeys });
                },
            },
            {
                key: 'even',
                text: 'Select Even Row',
                onSelect: changableRowKeys => {
                    let newSelectedRowKeys = [];
                    newSelectedRowKeys = changableRowKeys.filter((key, index) => {
                        if (index % 2 !== 0) {
                            return true;
                        }
                        return false;
                    });
                    selectedRowKeys({ selectedRowKeys: newSelectedRowKeys });
                },
            },
        ]
    }

    let hasSelected

    if (!selectedRowKeys) {
        hasSelected = false
    } else {
        hasSelected = selectedRowKeys.length > 0
    }

    function onChange(pagination, filters, sorter, extra) {
        //console.log(extra);

    }


    return (
        <>
            <h1>Корзина товаров</h1>
            <Button type="primary" onClick={() => {
                dispatch(deleteAllProductInCart(selectedRowKeys))
                setSelectedRowKeys([])
            }} disabled={!hasSelected}>
                Удалить все
            </Button>
            <Table rowSelection={rowSelection} columns={columns} dataSource={data} onChange={onChange} />
        </>
    )
}

export default MyCart
