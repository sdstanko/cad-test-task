import { FC } from "react";
import { useSearchParams } from "react-router";
import styles from "./Pagination.module.css";
import PaginationBtn from "../PaginationBtn/PaginationBtn";
import getVisiblePages from "../../utils/getVisiblePages";

interface PaginationProps {
  totalItems: number;
}

const Pagination: FC<PaginationProps> = ({ totalItems }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const totalPages = Math.ceil(totalItems / 10);

  //I customed pagination a bit
  const visiblePages = getVisiblePages(totalPages, currentPage);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: String(page) });
  };

  return (
    <div className={styles.pagination}>
      {currentPage > 1 && (
        <button
          className={styles.btn}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Back
        </button>
      )}

      {visiblePages.map((page, index) =>
        typeof page === "number" ? (
          <PaginationBtn
            key={index}
            page={page}
            active={currentPage === page}
            onClick={() => handlePageChange(page)}
          />
        ) : (
          <span key={index} className={styles.dots}>
            ...
          </span>
        )
      )}

      {currentPage < totalPages && (
        <button
          className={styles.btn}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Forward
        </button>
      )}
    </div>
  );
};

export default Pagination;
