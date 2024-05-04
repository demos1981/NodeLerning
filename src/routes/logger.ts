import express, { Router } from "express";
import * as loggerController from "../../src/controllers/loggerController";

const router: Router = express.Router();

router.get("/", loggerController.getAllLoggs);

export default router;
