import express, { Router } from "express";
import * as fileController from "../controllers/fileController";
import authMiddleware from "src/middlewares/auth.middleware";
import { roleMiddleware } from "src/middlewares/role.middleware";
import { UserRole } from "src/interfaces/user.interface";
import multer from "multer";
import path from "path";
import fs from "fs";

const router: Router = express.Router();

const createUploadsFolderIfNotExists = () => {
  const uploadsFolderPath = path.join(__dirname, "..", "..", "uploads");
  if (!fs.existsSync(uploadsFolderPath)) {
    fs.mkdirSync(uploadsFolderPath);
  }
};

createUploadsFolderIfNotExists();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "..", "uploads"));
  },
  filename: (req, file, cb) => {
    const fileName = `${Date.now()}-${file.originalname}`;
    cb(null, fileName);
  },
});
const upload = multer({ storage });

router.get(
  "/",
  authMiddleware(),
  roleMiddleware(UserRole.ADMIN, UserRole.OWNER, UserRole.CUSTOMER),
  fileController.readFileStream
);
router.post(
  "/",
  authMiddleware(),
  roleMiddleware(UserRole.ADMIN, UserRole.OWNER, UserRole.CUSTOMER),
  fileController.writeFileStream
);
router.post(
  "/upload-photo",
  authMiddleware(),
  roleMiddleware(UserRole.ADMIN, UserRole.OWNER, UserRole.CUSTOMER),
  upload.single("logo"),
  fileController.uploadPhoto
);
export default router;
