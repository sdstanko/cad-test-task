import React, { FC } from "react";
import styles from "./PruductItem.module.css";
import Product from "../../types/Product";

interface ProductItemProps {
  data: Product;
}

const ProductItem: FC<ProductItemProps> = ({ data }) => {
  return (
    <li className={styles.item}>
      <img
        className={styles.img}
        src={data.thumbnail}
        alt={data.title}
        width={100}
      />
      <div className={styles.body}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.price}>{`${data.price} $`}</div>
      </div>
    </li>
  );
};

export default ProductItem;
