import { User } from "../entities/users.entity";
import bcrypt from "bcrypt";
import { DataUser } from "src/interfaces/auth.interface";

export const getAllUsers = async () => {
  const [users, count] = await User.findAndCount({});
  return {
    users,
    count,
  };
};

export const createUser = async (createUserData: DataUser) => {
  const { name, email, password } = createUserData;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser: User = await User.save({
    name,
    email,
    password: hashPassword,
  });
  return newUser;
};

export const updateUser = async (id: number, updateUserData: DataUser) => {
  const { name, email, password } = updateUserData;
  const hashPassword = await bcrypt.hash(password, 10);
  const user = await User.findOne({
    where: { id },
  });

  user.name = name;
  user.email = email;
  user.password = hashPassword;

  await user.save();
  return user;
};
