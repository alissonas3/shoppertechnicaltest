import React, { useEffect, useState } from "react";
import axios from "axios";

const Packs = () => {

    const [packs, setPacks] = useState([])

    useEffect(() => {
        const fetchAllPacks = async () => {
            try {
                const res = await axios.get("http://localhost:8800")
                setPacks(res.data)
            } catch (err) {
                console.log(err)
            }
        }

        fetchAllPacks()
    }, [])

    return (
        <div>
            <div>Produtos de pacote</div>
            <div className="packs">
                {packs.map(pack => (
                    <div className="pack" key={packs.id}>
                        {/* <span>{product.code}</span> */}
                        <h2>{pack.pack_id}</h2>
                        <span>{pack.product_id}</span>
                        <span>{pack.qty}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Packs