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

export const updateProduct = async (id: number, updateProductDto: any) => {
  const product = await Product.findOne({ where: { id } });
  if (!product) {
    throw new Error("Product not found");
  }
};

export const deleteProduct = async (id: number) => {
  const product = await Product.findOne({ where: { id } });
  if (!product) {
    throw new Error("Product not found");
  }
  product.deletedAt = new Date();
  console.log(product);
  await product.remove();
};
