import { FC } from "react";
import styles from "./styles.module.scss";

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <p>
        Press the "ADD" button to add the new Card.
        <br /> Use the "SORT" button to sort the cards by the increase.
        <br /> Press an X icon on the top right to delete them
      </p>
    </div>
  );
};

export default Sidebar;
