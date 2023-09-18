import { ChangeEvent, FC, InputHTMLAttributes, memo } from "react";
import styles from "./Textfield.module.scss";
import classNames from "classnames";
import SearchIcon from "../../../assets/icons/search.svg";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  handleChange: (text: string) => void;
  handleSubmit?: () => void;
  classess?: {
    root?: string;
    input?: string;
  };
}

const TextField: FC<Props> = ({
  handleChange,
  handleSubmit,
  classess,
  ...rest
}) => {
  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleChange(value);
  };

  const isSearch = rest.type === "search";

  return (
    <div
      data-testid="text-field"
      className={classNames(styles.root, classess?.root)}
    >
      {isSearch && (
        <SearchIcon className={styles.search} onClick={handleSubmit} />
      )}
      <input
        data-testid="input"
        className={classNames(styles.input, classess?.input)}
        onChange={onInput}
        {...rest}
        type="text"
      />
    </div>
  );
};

export default memo(TextField);
