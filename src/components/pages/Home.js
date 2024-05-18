import React, { useEffect, useState } from "react";
import { Table, Pagination, Card, List } from "antd";
import axios from 'axios'
import styles from './Home.module.css'
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();
    const [repositories, setRepositories] = useState([]);
    const [products, setProducts] = useState([]);
    let [totalPages, setTotalPages] = useState(0);
    let [skip, setSkip] = useState(0);
    let [totalItems, setTotalItems] = useState(0);
    let offset = 12;
    const { Meta } = Card;

    useEffect(() => {
        getData(1);
    }, [])

    async function getData(page) {
        let skip = (page - 1) * offset;
        let response = await axios.get(`https://dummyjson.com/products?limit=${offset}&skip=${skip}`);

        setProducts(response.data.products)

        setTotalItems(response.data.total)
    }

    function redirectToProduct(id) {
        navigate(`product/${id}`);
    }


    return (
        <>
            <div>
                <header>
                    <h1>Meus produtos</h1>
                </header>
            </div>

            <div className={styles.main_container}>
            {/* <div> */}

                <List
                    grid={{
                        column: 3,
                    }}

                    pagination= {{
                        pageSize: 12,
                        total: totalItems,
                        showSizeChanger: false,
                        onChange: (page) => {getData(page)}
                    }}

                    dataSource={products}

                    renderItem={(item) => (
                        <List.Item>
                            <Card 
                                style={{width:320, height:350}} 
                                hoverable 
                                cover={<div><img className={styles.card_img} src={item.thumbnail}></img></div>}
                                onClick={() => redirectToProduct(item.id)}
                            > 
                                <Meta title={`R$ ${parseFloat(item.price)}`} description={item.description} ></Meta>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </>
    )

}

export default Home;