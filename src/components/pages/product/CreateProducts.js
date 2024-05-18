import ProductForm from "./ProductForm";
import CustomBreadCrumb from "../../layout/CustomBreadCrumb";
import ProductService from "../../services/ProductService";
import { redirect, useNavigate } from "react-router-dom";
import { Layout } from "antd";

function CreateProducts() {

    const navigate = useNavigate();
    const productService = new ProductService();

    async function handleSubmit(productParam) {
        const response = await productService.Create(productParam);

        if (response.status == 200) {
            navigate('/products', {state: {message: 'Dados salvos com sucesso'}})
            return redirect('/products')
        }
    }

    const breadCrumbItems = [
        'Produtos',
        'Cadastro'
    ]

    return (
        <>
            <Layout>
                <CustomBreadCrumb breadCrumbItems={breadCrumbItems} />
                <ProductForm handleSubmitParam={handleSubmit}>
                </ProductForm>
            </Layout>
        </>
    )

}

export default CreateProducts;