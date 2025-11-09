export type Product = {
  title: string;
  offer: string; 
  category: string;
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
