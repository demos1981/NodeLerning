import { Request, Response } from "express";
import * as userServices from "../services/userServices";
import { ErrorMessage } from "../utils/constants/constants";
import { storeRefreshToken } from "../../src/utils/tokenManagement";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const { users, count } = await userServices.getAllUsers();
    res.status(200).json({ users, count });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const createUserData = req.body;
    const newUser = await userServices.createUser(createUserData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateUserData = req.body;
    const updatedUser = await userServices.updateUser(id, updateUserData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// if (newUser) {
//   const acessToken = authService.generateAcessToken({
//     id: newUser.id,
//     email: newUser.email,
//   });
//   const refreshToken = authService.generateRefreshToken({
//     id: newUser.id,
//     email: newUser.email,
//   });
//   await storeRefreshToken(newUser.id, refreshToken);
//   res.json({ acessToken, refreshToken });
// } else {
//   res.status(400).send(ErrorMessage.errorInvalidPassword);
// }
