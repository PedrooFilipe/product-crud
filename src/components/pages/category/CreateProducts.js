import { Form, Input } from "antd";
import React, { useState } from "react";
import ProductForm from "./ProductForm";
import axios from "axios";

function CreateProducts() {

    async function handleSubmit(productParam) {

        console.log(productParam)
        const response = await axios.post('https://dummyjson.com/products/add', {productParam}, {headers: {'Content-Type': 'application/json'}})

        if(response.status == 200){

        }
    }

    return (
        <>
            <ProductForm handleSubmitParam={handleSubmit}>
            </ProductForm>
        </>
    )

}

export default CreateProducts;