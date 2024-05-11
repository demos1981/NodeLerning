import bcrypt from "bcrypt";
import { User } from "../../../src/entities/users.entity";
import { Product } from "../../entities/product.entity";
import {
  getAllUsers,
  updateUser,
  addProduct,
  createUser,
} from "../userServices";
import { UserRole } from "../../../src/interfaces/user.interface";

jest.mock("../../entities/users.entity");
jest.mock("../../entities/product.entity");
jest.mock("bcrypt");

describe("getAllUser", () => {
  it("should return users and count when users are found", async () => {
    const mockUsers = [
      { id: 1, name: "User1" },
      { id: 2, name: "User2" },
    ];
    const mockCount = 2;
    (User.findAndCount as jest.Mock).mockResolvedValue([mockUsers, mockCount]);

    const result = await getAllUsers();

    expect(User.findAndCount).toHaveBeenCalled();
    expect(result).toEqual({ users: mockUsers, count: mockCount });
  });
  it("shoult return empty array and count when no users are found", async () => {
    (User.findAndCount as jest.Mock).mockResolvedValue([[], 0]);

    const result = await getAllUsers();

    expect(User.findAndCount).toHaveBeenCalled();
    expect(result).toEqual({ users: [], count: 0 });
  });
});
describe("createUser", () => {
  it("should return create user", async () => {
    const createUserDto = {
      name: "New User",
      email: "firstuser@gmail.com",
      password: "new password",
      role: UserRole.CUSTOMER,
    };
    const mockUsers = { id: 1, ...createUserDto };
    (User.save as jest.Mock).mockResolvedValue(mockUsers);

    const result = await createUser(createUserDto);

    expect(User.save).toHaveBeenCalled();
    expect(result).toEqual(mockUsers);
  });
});

describe("updateUser", () => {
  it("should return the update user", async () => {
    const userId = 1;
    const updateDto = {
      name: "Update User",
      email: "update@example.com",
      password: "newpassword",
      role: UserRole.OWNER,
    };
    const mockUser = { id: userId, ...updateDto };
    (User.update as jest.Mock).mockResolvedValue({ affected: 1 });
    (User.findOne as jest.Mock).mockResolvedValue(mockUser);
    (bcrypt.hash as jest.Mock).mockResolvedValue("hashedPassword");

    const result = await updateUser(userId, updateDto);

    expect(User.update).toHaveBeenCalledWith(
      { id: userId },
      {
        name: "Update User",
        email: "update@example.com",
        password: "hashedPassword",
        role: UserRole.OWNER,
      }
    );
    expect(User.findOne).toHaveBeenCalledWith({ where: { id: userId } });
    expect(result).toEqual(mockUser);
  });

  it("should throw error when user is not update", async () => {
    const userId = 1;
    const updateDto = {
      name: "Update User",
      email: "update@example.com",
      password: "newpassword",
      role: UserRole.ADMIN,
    };
    (User.update as jest.Mock).mockResolvedValue({ affected: 0 });

    await expect(updateUser(userId, updateDto)).rejects.toThrow();
  });
});

describe("addProduct", () => {
  it("should throw error when user or product is not found", async () => {
    const userId = 1;
    const productId = 1;
    (User.findOne as jest.Mock).mockResolvedValue(null);
    (Product.findOne as jest.Mock).mockResolvedValue(null);

    await expect(addProduct(userId, productId)).rejects.toThrow();
  });
});
