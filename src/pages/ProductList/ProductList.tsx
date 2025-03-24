import { useSearchParams } from "react-router";
import useFetchProducts from "../../hooks/useFetchProducts";
import ProductItem from "../../components/ProductItem/ProductItem";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./ProductList.module.css";

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const { productsData, loading, error } = useFetchProducts(currentPage);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!productsData) return <p>No products found.</p>;

  return (
    <div className={styles.inner}>
      <h1 className={styles.title}>Product list</h1>
      <ul className={styles.list}>
        {productsData.products.map((product) => (
          <ProductItem data={product} key={product.id} />
        ))}
      </ul>
      <Pagination
        totalItems={productsData.total}
      />
    </div>
  );
};

export default ProductList;
