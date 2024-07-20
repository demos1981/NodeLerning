import { Request, Response } from "express";
import * as authService from "../services/authService";
import { ErrorMessage } from "../utils/constants/constants";
import {
  retrieveRefreshToken,
  storeRefreshToken,
} from "../utils/tokenManagement/index";
import { RegisterUserDto } from "../dto/auth.dto";
import { User } from "../entities/users.entity";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  try {
    const registerUserDto: RegisterUserDto = req.body;
    const newUser = await authService.registerUser(registerUserDto);
    res.status(201).json({ message: "User registered succes", user: newUser });
  } catch (error: unknown) {
    console.error(error);
    res.status(500).send(ErrorMessage.errorRegisteringUser);
  }
};
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await authService.loginUser(email, password);
  if (user) {
    const acessToken = authService.generateAcessToken({
      id: user.id,
      email: user.email,
    });
    const refreshToken = authService.generateRefreshToken({
      id: user.id,
      email: user.email,
    });
    await storeRefreshToken(user.id, refreshToken);
    res.json({ acessToken, refreshToken });
  } else {
    res.status(400).send(ErrorMessage.errorInvalidPassword);
  }
};
export const token = async (req: Request, res: Response) => {
  const { token } = req.body;
  if (!token) return res.sendStatus(401);
  try {
    const storedToken = await retrieveRefreshToken(token);
    if (!storedToken) return res.sendStatus(403);

    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!, (err, user: User) => {
      if (err) return res.sendStatus(403);
      const acessToken = authService.generateAcessToken({
        id: user.id,
        email: user.email,
      });
      res.json({ acessToken });
    });
  } catch (error: unknown) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    await authService.logoutUser(req.body.token);
  } catch (error) {
    console.log(error);

    res.json({ message: "logout" });
  }
};
