import { Request, Response } from "express";
import { CreateLoggerDto } from "../../src/dto/logger.dto";
import * as loggerService from "../services/loggerService";

export const createLogger = async (req: Request, res: Response) => {
  try {
    const createLoggerData: CreateLoggerDto = req.body;
    const newLog = await loggerService.createLogger(createLoggerData);
    res.status(201).json(newLog);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
