import { Request, Response } from "express";
import * as authService from "../services/authService";
import { ErrorMessage } from "../utils/constants/constants";
import { storeRefreshToken } from "../../src/utils/tokenManagement/index";
import { RegisterUserDto } from "src/dto/auth.dto";

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
