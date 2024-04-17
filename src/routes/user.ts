import express, { Router } from "express";
import * as userController from "../controllers/userController";
import authMiddleware from "../middlewares/auth.middleware";
import { validationMiddleware } from "../../src/middlewares/validation.middleware";
import { CreateUserDto } from "../../src/dto/user.dto";

const router: Router = express.Router();

router.get("/", userController.getAllUsers);
router.post(
  "/",

  validationMiddleware(CreateUserDto, "body"),
  userController.createUser
);
router.put(
  "/:id",
  validationMiddleware(CreateUserDto, "body"),
  userController.updateUser
);

export default router;
