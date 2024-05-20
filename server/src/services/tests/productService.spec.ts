import { createProduct, getAllProduct } from "../productService";
import { Product } from "../../entities/product.entity";

jest.mock("../../entities/product.entity", () => ({
  Product: {
    findAndCount: jest.fn(),
    save: jest.fn(),
  },
}));

describe("getAllProduct", () => {
  it("should return products and count products", async () => {
    const mockProducts = [
      { id: 1, name: "Product1" },
      { id: 2, name: "Product2" },
    ];
    const mockCount = 2;
    (Product.findAndCount as jest.Mock).mockResolvedValue([
      mockProducts,
      mockCount,
    ]);

    const result = await getAllProduct();

    expect(Product.findAndCount).toHaveBeenCalled();
    expect(result).toEqual({ products: mockProducts, count: mockCount });
  });

  it("should return empty array and count when no product are found", async () => {
    (Product.findAndCount as jest.Mock).mockResolvedValue([[], 0]);

    const result = await getAllProduct();

    expect(Product.findAndCount).toHaveBeenCalled();
    expect(result).toEqual({ products: [], count: 0 });
  });
});

describe("createProduct", () => {
  it("should return created product", async () => {
    const createProductDto = { name: "New Product" };
    const mockProducts = { id: 1, ...createProductDto };
    (Product.save as jest.Mock).mockResolvedValue(mockProducts);

    const result = await createProduct(createProductDto);

    expect(Product.save).toHaveBeenCalledWith(createProductDto);
    expect(result).toEqual(mockProducts);
  });
});
