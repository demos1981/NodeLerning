import { Product } from "../entities/product.entity";

export const getAllProduct = async () => {
  const [products, count] = await Product.findAndCount({});
  return {
    products,
    count,
  };
};

export const getProductByIdWithUsers = async () => {
  return await Product.createQueryBuilder("product")
    .innerJoinAndSelect("product.users", "user")
    .getMany();
};

export const createProduct = async (createProductDto: any) => {
  const product = await Product.save(createProductDto);
  return product;
};
