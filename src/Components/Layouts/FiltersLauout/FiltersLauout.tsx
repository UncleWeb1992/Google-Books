import { FC, PropsWithChildren } from "react";
import styles from "./FiltersLauout.module.scss";
import { Header } from "Components/ui/Header";

const FiltersLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default FiltersLayout;
