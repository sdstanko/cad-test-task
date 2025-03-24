import Review from "./Review";

export default interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    images: string[];
    category: string;
    rating: number;
    reviews: Review[]
  }