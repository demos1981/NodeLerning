import { Request, Response } from "express";
import * as authService from "../services/authService";
import { ErrorMessage } from "../utils/constants/constants";

export const register = async (req: Request, res: Response) => {
  try {
    const registerUserDto: any = req.body as any;
    const newUser = await authService.registerUser(registerUserDto);
    res.status(201).json({ message: "User registered succes", user: newUser });
  } catch (error: unknown) {
    console.error(error);
    res.status(500).send(ErrorMessage.errorRegisteringUser);
  }
};
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await authService.loginUser(email, password);
    res.status(202).json({ message: "Your login is ok", user });
  } catch (error: unknown) {
    console.error(error);
    res.status(400).send(ErrorMessage.errorInvalidPassword);
  }
};
