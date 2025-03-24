import { useState, useEffect } from "react";
import Product from "../types/Product";

const useFetchProducts = (id: number) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Data load error");
        setLoading(false);
      });
  }, []);

  return { product, loading, error };
};

export default useFetchProducts;
