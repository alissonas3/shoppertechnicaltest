import express  from "express";
import productRoutes from "./routes/products.js"
import packRoutes from "./routes/packs.js"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", productRoutes);
app.use("/", packRoutes);

app.post("/", productRoutes);
app.post("/", packRoutes);

app.listen(8800);