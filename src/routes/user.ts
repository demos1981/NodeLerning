import express, { Router } from "express";
import * as userController from "../controllers/userController";
import authMiddleware from "../middlewares/auth.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { CreateUserDto } from "../dto/user.dto";

const router: Router = express.Router();

router.get(
  "/",
  authMiddleware(),

  userController.getAllUsers
);
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
  validationMiddleware(CreateUserDto, "body"),
  userController.updateUser
);

export default router;
