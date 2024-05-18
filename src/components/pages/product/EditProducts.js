import { Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import axios from "axios";
import CustomBreadCrumb from "../../layout/CustomBreadCrumb";
import { useNavigate } from "react-router-dom";

function CreateProducts() {

    const [product, setProduct] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const response = await axios.get(`https://dummyjson.com/products/1`);
        setProduct(response.data);
    }

    async function handleSubmit(productParam) {
        const response = await axios.put(`https://dummyjson.com/products/1`, { productParam }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.status == 200) {
            navigate('/products', {state: {message: 'Dados salvos com sucesso'}})
        }
    }

    const breadCrumbItems = [
        'Produtos',
        'Alteração'
    ]

    return (
        <>
            {product &&
                <div>
                    <CustomBreadCrumb breadCrumbItems={breadCrumbItems} />
                    <ProductForm productParam={product} handleSubmitParam={handleSubmit} /> 
                </div>
            }
        </>
    )

}

export default CreateProducts;