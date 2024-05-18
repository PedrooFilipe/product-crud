import { Breadcrumb } from "antd";
import React from "react";

function CustomBreadCrumb({ breadCrumbItems }) {

    const items = [{ 'title': 'Home' }];

    breadCrumbItems.forEach((item) => {
        items.push({ 'title': item }
        )
    })

    return (
        <>
            <Breadcrumb style={{ margin: '16px 0' }}

                items={items} >

            </Breadcrumb>
        </>
    )
}


export default CustomBreadCrumb;