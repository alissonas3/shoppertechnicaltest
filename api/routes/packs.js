import express from "express";
import { getPacks } from "../controllers/packController.js";
import { postPacks } from "../controllers/packController.js";

const router = express.Router()

router.get("/", getPacks);

router.get("/", postPacks);

export default router;