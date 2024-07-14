import express, { Router } from "express";
import * as productController from "../controllers/productController";
import authMiddleware from "../middlewares/auth.middleware";
import { validationMiddleware } from "../middlewares/validation.middleware";
import { CreateProductDto } from "../dto/product.dto";
import { UserRole } from "../interfaces/user.interface";
import { roleMiddleware } from "../middlewares/role.middleware";

const router: Router = express.Router();

router.get(
  "/",
  // authMiddleware(),
  // roleMiddleware(UserRole.ADMIN, UserRole.OWNER),
  productController.getAllProduct
);
router.get(
  "/product-by-id-with-users",
  // roleMiddleware(UserRole.ADMIN, UserRole.OWNER),
  // authMiddleware(),
  productController.getProductByIdWithUsers
);
router.post(
  "/",
  // authMiddleware(),
  // validationMiddleware(CreateProductDto, "body"),
  productController.createProduct
);
router.delete("/", productController.deleteProduct);
router.put("/:id", productController.updateProduct);
export default router;
