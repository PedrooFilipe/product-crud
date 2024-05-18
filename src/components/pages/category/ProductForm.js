import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

function ProductForm({ productParam, handleSubmitParam }) {

    const [product, setProduct] = useState(productParam ? productParam : {});

    function handleOnChange(e) {
        setProduct({ ...product, [e.target.name]: e.target.value });
    }

     function handleSubmit(e) {
        handleSubmitParam(product);
    }

    return (
        <>
            <Form>
                <Form.Item label="Titulo">
                    <Input name="title" onChange={handleOnChange} value={product.title} />
                </Form.Item>

                <Form.Item label="Categoria">
                    <Input name="category" onChange={handleOnChange} value={product.category} />
                </Form.Item>
                <Form.Item label="Preço" >
                    <Input name="price" onChange={handleOnChange} value={product.price} />
                </Form.Item>
                <Form.Item label="Descrição" >
                    <TextArea name="description" onChange={handleOnChange} value={product.description} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" onClick={ () => handleSubmit(product)}>
                        {productParam ? 'Alterar' : 'Cadastrar'}
                    </Button>
                </Form.Item>
            </Form>

        </>
    )

}

export default ProductForm;