import { FC } from "react";
import styles from "./PreviewContainer.module.css";

interface PreviewContainerProps {
  images: string[];
  mainImage: string;
  onClick: (src: string) => void;
}

const PreviewContainer: FC<PreviewContainerProps> = ({
  images,
  mainImage,
  onClick,
}) => {
  return (
    <div className={styles.container}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Product preview ${index + 1}`}
          className={
            mainImage === img
              ? [styles.preview, styles.active].join(" ")
              : styles.preview
          }
          onClick={() => onClick(img)}
        />
      ))}
    </div>
  );
};

export default PreviewContainer;
