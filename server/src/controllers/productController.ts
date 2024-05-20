import { Request, Response } from "express";
import * as productService from "../services/productService";
import { CreateProductDto } from "../dto/product.dto";

export const getAllProduct = async (req: Request, res: Response) => {
  try {
    const { products, count } = await productService.getAllProduct();
    res.status(200).json({ products, count });
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

export const getProductByIdWithUsers = async (req: Request, res: Response) => {
  try {
    const getProductByIdUsers = await productService.getProductByIdWithUsers();
    res.status(200).json(getProductByIdUsers);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const createProductDto: CreateProductDto = req.body;
    const product = await productService.createProduct(createProductDto);
    res.json(product);
  } catch (error) {
    res.status(error.response?.status || 500).json({ error: error.message });
  }
};
