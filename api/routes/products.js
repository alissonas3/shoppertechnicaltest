import express from "express";
import { getProducts } from "../controllers/productController.js";
import { postProducts } from "../controllers/productController.js";

const router = express.Router()

router.get("/", getProducts);

router.post("/", postProducts);

export default router;