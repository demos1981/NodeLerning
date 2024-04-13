import { Request, Response } from "express";
import * as userServices from "../services/userServices";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const { users, count } = await userServices.getAllUsers();
    res.status(200).json({ users, count });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};
