import bcrypt from "bcrypt";
import { User } from "../../entities/users.entity";
import { Product } from "../../entities/product.entity";
import { getAllUsers, updateUser, addProduct } from "../userServices";

jest.mock("../../entities/users.entity");
jest.mock("../../entities/product.entity");
jest.mock("bcrypt");

describe("getAllUser", () => {
  it("should return users and count when users are found", async () => {
    const mockUsers = [
      { id: 1, name: "User" },
      { id: 2, name: "User" },
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

describe("updateUser", () => {
  it("should return the update user", async () => {
    const userId = 1;
    const updateDto = {
      name: "Update User",
      email: "update@example.com",
      password: "newpassword",
      role: "newrole",
    };
    const mockUsers = { id: userId, ...updateDto };
    (User.update as jest.Mock).mockResolvedValue({ affected: 1 });
    (User.findOne as jest.Mock).mockResolvedValue(mockUsers);
    (bcrypt.hash as jest.Mock).mockResolvedValue("hashedPassword");

    const result = await updateUser(userId, updateDto);

    expect(User.update).toHaveBeenCalledWith(
      { id: userId },
      {
        name: "Update User",
        email: "update@example.com",
        password: "hashedPassword",
        role: "newrole",
      }
    );
    expect(User.findOne).toHaveBeenCalledWith({ where: { id: userId } });
    expect(result).toEqual(mockUsers);
  });

  it("should throw error when user is not update", async () => {
    const userId = 1;
    const updateDto = {
      name: "Update User",
      email: "update@example.com",
      password: "newpassword",
      role: "newrole",
    };
    (User.update as jest.Mock).mockResolvedValue({ affected: 0 });

    await expect(updateUser(userId, updateDto)).rejects.toThrowError(
      "Not updated user"
    );
  });
});
