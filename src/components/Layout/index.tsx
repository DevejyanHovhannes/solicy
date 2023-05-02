import { FC, useEffect } from "react";
import Header from "../Header";
import Page from "../Page";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { getBoxes } from "../../store/ui/actionCreators";

const Layout: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBoxes({}));
  }, [dispatch]);
  return (
    <div className={styles.layout}>
      <Header />
      <Page />
      <Sidebar />
      <Footer />
    </div>
  );
};

export default Layout;
