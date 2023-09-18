import { FC } from "react";
import styles from "./Error.module.scss";

const Error: FC<{ title?: string }> = ({ title }) => {
  const reloadPage = () => {
    location.reload();
  };

  const hint = title || "Ошибка приложения попробуйте позже";

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <p>{hint}</p>
        <button onClick={reloadPage}>Обновить страницу</button>
      </div>
    </div>
  );
};

export default Error;
