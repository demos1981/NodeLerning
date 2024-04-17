import bcrypt from "bcrypt";
import { User } from "../entities/users.entity";
import jwt from "jsonwebtoken";
import { removeRefreshToken } from "../../src/utils/tokenManagement/index";

type UserPayload = {
  id: number;
  email: string;
};

export const registerUser = async (registerUserData: any) => {
  const { name, email, password } = registerUserData;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser: User = await User.save({
    name,
    email,
    password: hashPassword,
  });
  return newUser;
};

export const loginUser = async (email: string, password: string) => {
  const user: User = await User.findOne({
    where: { email },
    select: ["id", "email", "password"],
  });
  if (!user) return null;
  const isPasswordValid = await bcrypt.compare(password, user.password);
  return isPasswordValid ? user : null;
};

export const generateAcessToken = (user: UserPayload) => {
  return jwt.sign({ id: user.id, email: user.email }, "ssh", {
    expiresIn: "1d",
  });
};
export const generateRefreshToken = (user: UserPayload) => {
  return jwt.sign({ id: user.id, email: user.email }, "ssh");
};

export const logoutUser = async (token: string) => {
  await removeRefreshToken(token);
};