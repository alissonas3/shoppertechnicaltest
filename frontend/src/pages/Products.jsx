import React, { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8800")
                setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchAllProducts()
    }, [])


    return (
        <div>
            <h1>Lista de Produtos</h1>
            <div className="produtos">
                {products.map(product =>(
                    <div className="product" key={product.code}>
                        {/* <span>{product.code}</span> */}
                        <h3>{product.name}</h3>
                        <span>{product.cost_price}</span>
                        <span>{product.sales_price}</span>
                    </div>    
                ))}
            </div>
            <button>VALIDAR</button>
        </div>
    )
}

export default Products