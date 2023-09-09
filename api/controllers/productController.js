import { db } from "../datab.js";

export const getProducts = (_, res) => {
    const q = "SELECT * FROM products";

    db.query(q, (err, data) => {
        if (err) {
            return res.json(err);
        }

        return res.status(200).json(data);
    })

}

export const postProducts = (req, res) => {
    const q = "INSERT INTO products (`code`, `name`, `cost_price`, `sales_price`) VALUES (?)"
    const values = [req.body.title];

    db.query(q, [values], (err, data) => {
        if(err) {
            return res.json("Produto adicionado com sucesso!")
        }

        return res.json(data)
    })
}
