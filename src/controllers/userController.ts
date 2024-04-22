import { Request, Response } from "express";
import * as userServices from "../services/userServices";
import { CreateUserDto, UpdateUserDto } from "src/dto/user.dto";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const { users, count } = await userServices.getAllUsers();
    res.status(200).json({ users, count });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};
export const getAllUserWithProducts = async (req: Request, res: Response) => {
  try {
    const userWithProducts = await userServices.getAllUserWithProducts();
    res.status(200).json(userWithProducts);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const createUserData: CreateUserDto = req.body;
    const newUser = await userServices.createUser(createUserData);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updateUserData: UpdateUserDto = req.body;
    const updatedUser = await userServices.updateUser(id, updateUserData);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const addProduct = async (req: Request, res: Response) => {
  try {
    const id = +req.params.id;
    const productId = +req.params.productId;
    const user = await userServices.addProduct(id, productId);
    res.status(200).json({ user });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};
