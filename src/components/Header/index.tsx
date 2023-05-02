import { FC, useEffect } from "react";

import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { addBox, sortBoxes } from "../../store/ui/actionCreators";
import Button from "@mui/material/Button";

const Header: FC = () => {
  const dispatch = useDispatch();

  const onAddClick = () => {
    dispatch(addBox({}));
  };

  const onSortClick = () => {
    dispatch(sortBoxes({}));
  };

  return (
    <div className={styles.header}>
      <Button onClick={onAddClick} className={styles.btn}>
        Add
      </Button>
      <Button onClick={onSortClick} className={styles.btn}>
        Sort
      </Button>
    </div>
  );
};

export default Header;
