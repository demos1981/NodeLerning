import { User } from "../entities/users.entity";
import bcrypt from "bcrypt";
import { CreateUserDto } from "src/dto/user.dto";
import { Product } from "../../src/entities/product.entity";

export const getAllUsers = async () => {
  const [users, count] = await User.findAndCount({});
  return {
    users,
    count,
  };
};

export const getAllUserWithProducts = async () => {
  return await User.createQueryBuilder("user")
    .innerJoinAndSelect("user.products", "product")
    .getMany();
};

export const createUser = async (createUserData: CreateUserDto) => {
  const { name, email, password, role } = createUserData;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser: User = await User.save({
    name,
    email,
    password: hashPassword,
    role,
  });
  return newUser;
};

export const updateUser = async (id: number, updateUserData: CreateUserDto) => {
  const { name, email, password, role } = updateUserData;

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

export const addProduct = async (id: number, productId: number) => {
  const user = await User.findOne({ where: { id }, relations: ["products"] });
  const product: Product = await Product.findOne({
    where: { id: productId },
  });
  if (!user || !product) {
    throw new Error("User or product not  found");
  }

  if (!user.products) {
    user.products = [product];
  } else {
    user.products.push(product);
  }
  await user.save();
  return user;
};

export const newFunct = async () => {};
