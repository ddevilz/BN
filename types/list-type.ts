export interface ProductProps {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: {
    id: number;
    name: string;
    image: string;
    creationAt: string;
    updatedAt: string;
  };
}

export type ProductArrayProps = {
  products: ProductProps[];
};

export interface CategoryProps {
  id: number;
  name: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface ProductCart {
  id: number;
  title: string;
  image?: string;
  price: number;
}
