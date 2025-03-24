import { useState, useEffect } from "react";
import Product from "../types/Product";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   thumbnail: string;
//   images: string[];
// }

interface ProductsData {
  products: Product[];
  total: number;
}

const useFetchProducts = (page: number) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsData, setProductsData] = useState<ProductsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setProductsData(data)
        setLoading(false);
      })
      .catch((err) => {
        setError("Data load error");
        setLoading(false);
      });
  }, [page]);

  return { productsData, loading, error };
};

export default useFetchProducts;
