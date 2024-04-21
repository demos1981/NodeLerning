import { Product } from "src/entities/product.entity";

export const getAllProduct = async () => {
  const [products, count] = await Product.findAndCount({
    relations: ["users"],
  });
  return {
    products,
    count,
  };
};

export const createProduct = async (createProductDto: any) => {
  const product = await Product.save(createProductDto);
  return product;
};
