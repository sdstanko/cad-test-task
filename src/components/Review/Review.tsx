import { FC } from "react";
import ReviewType from "../../types/Review";
import styles from "./Review.module.css";
import convertData from "../../utils/convertData";

interface ReviewProps {
  data: ReviewType;
}

const Review: FC<ReviewProps> = ({ data }) => {
  return (
    <div className={styles.item}>
      <div className={styles.name}>{data.reviewerName}</div>
      <div className={styles.date}>{convertData(data.date)}</div>
      <div className={styles.rating}>{`${data.rating}*`}</div>
      <div className={styles.comment}>{data.comment}</div>
    </div>
  );
};

export default Review;
