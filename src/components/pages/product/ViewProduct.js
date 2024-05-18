import React, { useEffect, useState } from "react";
import { Card } from "antd";
import axios from 'axios'
import { useParams } from 'react-router-dom'

function ViewProduct() {

    const { id } = useParams();

    const [repositories, setRepositories] = useState([]);
    const [products, setProducts] = useState([]);
    let [totalPages, setTotalPages] = useState(0);
    let [skip, setSkip] = useState(0);
    let [totalItems, setTotalItems] = useState(0);
    let offset = 12;
    const { Meta } = Card;


    return (
        <>
            <div>
                <header>
                    <h1>Produto: {id}</h1>
                </header>
            </div>
        </>
    )

}

export default ViewProduct;