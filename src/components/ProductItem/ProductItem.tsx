import { FC } from "react";
import styles from "./PruductItem.module.css";
import Product from "../../types/Product";
import { Link } from "react-router";

interface ProductItemProps {
  data: Product;
}

const ProductItem: FC<ProductItemProps> = ({ data }) => {
  return (
    <li className={styles.item}>
      <Link className={styles.link} to={`/product/${data.id}`}>
        <img
          className={styles.img}
          src={data.thumbnail}
          alt={data.title}
          width={100}
        />
      </Link>
      <div className={styles.body}>
        <Link className={styles.link} to={`/product/${data.id}`}>
          <h3 className={styles.title}>{data.title}</h3>
        </Link>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.price}>{`${data.price} $`}</div>
      </div>
    </li>
  );
};

export default ProductItem;
