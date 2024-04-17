import express, { Router } from "express";
import * as userController from "../controllers/userController";
import authMiddleware from "../middlewares/auth.middleware";
import { validationMiddleware } from "../../src/middlewares/validation.middleware";
import { CreateUserDto } from "../../src/dto/user.dto";

const router: Router = express.Router();

router.get("/", authMiddleware(), userController.getAllUsers);
router.post(
  "/",
  authMiddleware(),
  validationMiddleware(CreateUserDto, "body"),
  userController.createUser
);
router.put(
  "/:id",
  authMiddleware(),
  validationMiddleware(CreateUserDto, "body"),
  userController.updateUser
);

export default router;
