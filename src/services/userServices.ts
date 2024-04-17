import { User } from "../entities/users.entity";
import bcrypt from "bcrypt";
import { CreateUserDto } from "src/dto/user.dto";
import { DataUser } from "src/interfaces/auth.interface";

export const getAllUsers = async () => {
  const [users, count] = await User.findAndCount({});
  return {
    users,
    count,
  };
};

export const createUser = async (createUserData: CreateUserDto) => {
  const { name, email, password } = createUserData;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser: User = await User.save({
    name,
    email,
    password: hashPassword,
  });
  return newUser;
};

export const updateUser = async (id: number, updateUserData: CreateUserDto) => {
  const { name, email, password } = updateUserData;

  let user: User | undefined;

  const updatedFields: Partial<User> = {
    ...(name && { name }),
    ...(email && { email }),
  };

  if (password) {
    const hashPassword = await bcrypt.hash(password, 10);
    updatedFields.password = hashPassword;
  }

  const result = await User.update({ id }, updatedFields);
  if (result && result.affected) {
    user = await User.findOne({ where: { id } });
  } else {
    throw Error("Not update user");
  }
  return user;
};
