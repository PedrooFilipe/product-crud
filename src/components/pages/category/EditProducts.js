import { Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import axios from "axios";

function CreateProducts() {

    const [product, setProduct] = useState();

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const response = await axios.get(`https://dummyjson.com/products/1`);
        setProduct(response.data);
    } 

    async function handleSubmit(productParam){
        const result = await axios.put(`https://dummyjson.com/products/1`, {productParam}, {headers: {
            'Content-Type': 'application/json'
        }})

        console.log(result);
    }

    return (
        <>
            {product && <ProductForm productParam={product} handleSubmitParam={handleSubmit}/> }
        </>
    )

}

export default CreateProducts;