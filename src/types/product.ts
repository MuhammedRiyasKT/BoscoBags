export type Product = {
  title: string;
  offer: string; 
  category: string;
  description : string;
  categoryImg:string;
  stock : string;
  price: number;
  discountedPrice: number;
  id: number;
  imgs?: {
    thumbnails: string[];
  };
  colors?: {
    title: string;
    offer: string;
    price: number;
    description: string;
    category:string;
    categoryImg:string;
    stock:string;
    discountedPrice: number;
    id: number;
    imgs?: {
      thumbnails: string[];
    };
  }[];
};
