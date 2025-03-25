import { useNavigate, useParams } from "react-router";
import useFetchProductDetails from "../../hooks/useFetchProductDetails";
import styles from "./ProductDetails.module.css";
import { useState } from "react";
import Review from "../../components/Review/Review";
import PreviewContainer from "../../components/PreviewContainer/PreviewContainer";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState<string>("");

  if (!id) {
    return <div>Product ID is missing!</div>;
  }
  const { product, loading, error } = useFetchProductDetails(+id);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>No product found.</p>;

  const mainImage = currentImage || product.images[0];

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <button className={styles.backBtn} onClick={() => navigate(-1)}>
          Go back
        </button>
        <h1 className={styles.title}>{product.title}</h1>
      </div>

      <div className={styles.imageGallery}>
        <img src={mainImage} alt="Main Product" className={styles.largeImg} />

        {product.images.length > 1 && (
          <PreviewContainer
            mainImage={mainImage}
            onClick={setCurrentImage}
            images={product.images}
          />
        )}
      </div>

      <div className={styles.description}>{product.description}</div>
      <div className={styles.category}>{`Category: ${product.category}`}</div>
      <div className={styles.category}>{`Rating: ${product.rating}`}</div>
      <div className={styles.category}>{`Price: ${product.price}$`}</div>
      <div className={styles.category}>{`In stock: ${product.stock}`}</div>

      <div className={styles.reviews}>
        <h3 className={styles.reviews__title}>Reviews:</h3>
        <div className={styles.reviews__inner}>
          {product.reviews.map((review, i) => (
            <Review data={review} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
