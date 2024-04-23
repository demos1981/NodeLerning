import { Product } from "../../src/entities/product.entity";

export const getAllProduct = async () => {
  const [products, count] = await Product.findAndCount({});
  return {
    products,
    count,
  };
};

export const getProductByIdWithUsers = async () => {};

export const createProduct = async (createProductDto: any) => {
  const product = await Product.save(createProductDto);
  return product;
};