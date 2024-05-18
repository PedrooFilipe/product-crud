import React, { useEffect, useState } from "react";
import { Button, Modal, Space, Table, message, notification } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import ProductService from "../../services/ProductService";
import CustomBreadCrumb from "../../layout/CustomBreadCrumb";

function ListProducts() {

    const navigate = useNavigate();
    const location = useLocation();
    const [products, setProducts] = useState([])
    const [page, setPage] = useState(1);
    const [totalItems, setTotalItems] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const offset = 10;
    const service = new ProductService();
    const [api, contextHolder] = notification.useNotification();


    useEffect(() => {
        getData(page);

        if (location.state) {
            openNotification(true, location.state.message);

            window.history.replaceState({}, '')
        }

    }, [])



    const breadCrumbItems = [
        'Produtos',
        'Listagem'
    ]

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Titulo',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Preço',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Quantidade Disponível',
            dataIndex: 'stock',
            key: 'stock'
        },
        {
            title: 'Ações',
            dataIndex: '',
            key: 'x',
            render: (_, record) =>
                <Space>
                    <a onClick={() => handleEdit(record)}>
                        Editar
                    </a>

                    <a onClick={() => handleOkModal(record)}>
                        Excluir
                    </a>
                </Space>
        },
    ];

    async function getData(page) {
        setIsLoading(true);
        const response = await service.List(page, offset);

        setProducts(response.data.products)
        setTotalItems(response.data.total)
        setIsLoading(false);
    }

    function handleEdit(record) {
        navigate(`update/${record.id}`)
    }

    function handleCreateProduct() {
        navigate('create');
    }

    function handleOkModal(record) {
        Modal.confirm({
            title: 'Deseja excluir o registro?',
            onOk: async () => {
                const response = await service.delete(record.id);
                openNotification(true, 'Dados excluídos com sucesso!');
            }
        })
    }

    function openNotification(success = true, message) {
        console.log('teste')
        api.open({
            message: success ? 'Sucesso!' : 'Erro!',
            description: message,
            duration: 2,
        });
    };

    return (
        <>
            {contextHolder}

            <CustomBreadCrumb breadCrumbItems={breadCrumbItems} />
            <Button onClick={handleCreateProduct}>Cadastrar</Button>

            <Table loading={isLoading} dataSource={products} columns={columns} pagination={{
                pageSize: offset,
                total: totalItems,
                showSizeChanger: false,
                onChange: (page) => {
                    getData(page);
                }
            }} />

        </>
    )

}


export default ListProducts;