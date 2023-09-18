import { FC } from "react";
import styles from "./Loader.module.scss";
import "./Loader.scss";

type Props = {};

const Loader: FC = (props: Props) => {
  return (
    <div className={styles.loader}>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
