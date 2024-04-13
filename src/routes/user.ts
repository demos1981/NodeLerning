import express, { Router } from "express";
import * as userController from "../controllers/userController";
import authMiddleware from "../middlewares/auth.middleware";

const router: Router = express.Router();

router.get("/", authMiddleware(), userController.getAllUsers);

export default router;
