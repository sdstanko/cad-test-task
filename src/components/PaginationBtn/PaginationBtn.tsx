import styles from "./PaginationBtn.module.css";

interface PaginationBtnProps {
  page: number;
  active: boolean;
  onClick: () => void;
}

const PaginationBtn = ({ page, active, onClick }: PaginationBtnProps) => {
  return (
    <button
      className={active ? [styles.btn, styles.active].join(" ") : styles.btn}
      onClick={onClick}
    >
      {page}
    </button>
  );
};

export default PaginationBtn;
