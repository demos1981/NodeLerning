import express, { Router } from "express";
import * as userController from "../controllers/userController";
import authMiddleware from "../middlewares/auth.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { CreateUserDto, UpdateUserDto } from "../dto/user.dto";
import { UserRole } from "../interfaces/user.interface";
import { roleMiddleware } from "../middlewares/acess.middleware";

const router: Router = express.Router();

router.get(
  "/",
  authMiddleware(),
  roleMiddleware(UserRole.ADMIN, UserRole.OWNER),
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
  validationMiddleware(UpdateUserDto, "body"),
  userController.updateUser
);

export default router;
