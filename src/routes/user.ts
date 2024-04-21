import express, { Router } from "express";
import * as userController from "../controllers/userController";
import authMiddleware from "../middlewares/auth.middleware";
import { validationMiddleware } from "../../src/middlewares/validation.middleware";
import { CreateUserDto, UpdateUserDto } from "../../src/dto/user.dto";

const router: Router = express.Router();

router.get("/", authMiddleware(), userController.getAllUsers);
router.get(
  "/all-user-with-product",
  authMiddleware(),
  userController.getAllUserWithProducts
);

router.post(
  "/",
  authMiddleware(),
  validationMiddleware(CreateUserDto, "body"),
  userController.createUser
);
router.post(
  "/:id/add-product/:productId",
  authMiddleware(),
  userController.addProduct
);
router.put(
  "/:id",
  authMiddleware(),
  validationMiddleware(UpdateUserDto, "body"),
  userController.updateUser
);

export default router;
