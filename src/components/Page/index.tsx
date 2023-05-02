import { FC } from "react";
import styles from "./styles.module.scss";
import useShallowSelector from "../../hooks/useShalowSelector";
import { selectBoxes } from "../../store/ui/selectors";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch } from "react-redux";
import { deleteBox } from "../../store/ui/actionCreators";

const Page: FC = () => {
  const dispatch = useDispatch();

  const boxes = useShallowSelector(selectBoxes);

  const onDeleteClick = (index: number) => {
    dispatch(deleteBox({ index }));
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.page}>
        {boxes.map((boxValue, index) => {
          return (
            <div className={styles.box} key={index}>
              <div
                onClick={() => {
                  onDeleteClick(index);
                }}
              >
                <HighlightOffIcon className={styles.icon} />
              </div>

              <h5>{boxValue}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
