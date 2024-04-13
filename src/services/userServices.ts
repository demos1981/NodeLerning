import { User } from "../entities/users.entity";

export const getAllUsers = async () => {
  const [users, count] = await User.findAndCount({});
  return {
    users,
    count,
  };
};

export const createUser = async () => {};

export const updateUser = async () => {};
