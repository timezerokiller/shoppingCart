import React from 'react'
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { Breadcrumb } from 'antd';


function MyBreadcrumb() {
    const breadcrumbs = useBreadcrumbs();

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}>
                {breadcrumbs.map(({ breadcrumb }, index) =>
                    <Breadcrumb.Item key={index}>
                        {breadcrumb}
                    </Breadcrumb.Item>)}
            </Breadcrumb>
        </>
    )
}

export default MyBreadcrumb
