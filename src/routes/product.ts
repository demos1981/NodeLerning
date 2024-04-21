import express, { Router } from "express";
import * as productController from "../../src/controllers/productController";
import authMiddleware from "src/middlewares/auth.middleware";

const router: Router = express.Router();

router.get("/", authMiddleware(), productController.getAllProduct);
router.post("/", authMiddleware(), productController.createProduct);

export default router;
