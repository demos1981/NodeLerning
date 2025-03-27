export interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

export interface ProductState {
  products: ProductProps[];
  loading: boolean;
  error: string | null;
}
export interface ProductProps {
  id: number;
  name: string;
  color: string;
}
