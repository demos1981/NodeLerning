import { Request, Response } from "express";
import * as loggerService from "../services/loggerService";
import { loggerType } from "src/interfaces/logger.interfaces";

// export const createLogger = async (req: Request, res: Response) => {
//   try {
//     const createLoggerData: loggerType = req.body;
//     const newLog = await loggerService.createLogger(createLoggerData);
//     res.status(201).json(newLog);
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// };

export const getAllLoggs = async (req: Request, res: Response) => {
  try {
    const { loggs, count } = await loggerService.getAllLoggs();
    res.status(200).json({ loggs, count });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};
