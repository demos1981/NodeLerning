import express, { Router } from "express";
import * as productController from "../../src/controllers/productController";
import authMiddleware from "../../src/middlewares/auth.middleware";
import { validationMiddleware } from "../../src/middlewares/validation.middleware";
import { CreateProductDto } from "../../src/dto/product.dto";
import { UserRole } from "../../src/interfaces/user.interface";
import { roleMiddleware } from "../../src/middlewares/role.middleware";

const router: Router = express.Router();

router.get(
  "/",
  authMiddleware(),
  roleMiddleware(UserRole.ADMIN, UserRole.OWNER),
  productController.getAllProduct
);
router.get(
  "/product-by-id-with-users",
  roleMiddleware(UserRole.ADMIN, UserRole.OWNER),
  authMiddleware(),
  productController.getProductByIdWithUsers
);
router.post(
  "/",
  authMiddleware(),
  validationMiddleware(CreateProductDto, "body"),
  productController.createProduct
);

export default router;
