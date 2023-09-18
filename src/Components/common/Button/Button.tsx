import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  classess?: string;
}

const Button: FC<Props> = ({ text, classess, ...rest }) => {
  return (
    <button className={classNames(styles.button, classess)} {...rest}>
      {text}
    </button>
  );
};

export default Button;
