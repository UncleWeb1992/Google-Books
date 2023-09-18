import { FC, useEffect, useId, useRef, useState } from "react";
import { IOptions } from "types/types";
import ArrowIcon from "../../../assets/icons/arrow_drop.svg";
import styles from "./SelectField.module.scss";
import classNames from "classnames";

type Props = {
  options: IOptions[];
  label?: string;
  fieldName?: string;
  value?: string;
  onChange: (val: IOptions, fieldName?: string) => void;
  classess?: {
    root?: string;
    label?: string;
    select?: string;
    menu?: string;
  };
};

const SelectField: FC<Props> = ({
  options,
  label,
  classess,
  fieldName,
  value,
  onChange,
}) => {
  const [selected, setSelected] = useState(() => value || options[0]?.label);
  const [open, setOpen] = useState(false);
  const menuref = useRef<HTMLDivElement>(null);
  const id = useId();

  const handleChange = (opt: IOptions) => {
    setSelected(opt.label);
    onChange(opt, fieldName);
    setOpen(false);
  };

  const isActive = (val: string) => {
    return val === selected;
  };

  useEffect(() => {
    const subscribeClick = (e: MouseEvent) => {
      if (!menuref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", subscribeClick);

    return () => window.removeEventListener("click", subscribeClick);
  }, []);

  return (
    <div
      data-testid="select-field"
      className={classNames(styles.root, classess?.root)}
    >
      {label && (
        <label
          htmlFor={id}
          className={classNames(styles.label, classess?.label)}
        >
          {label}
        </label>
      )}
      <div
        data-testid="select-value"
        ref={menuref}
        onClick={() => setOpen(!open)}
        className={classNames(styles.select, classess?.select)}
        id={id}
      >
        <ArrowIcon
          className={classNames(styles.arrow, { [styles.open]: open })}
        />
        {selected}
        <ul className={classNames(styles.menu, { [styles.active]: open })}>
          {options.map((opt) => (
            <li
              data-testid="menu-item"
              className={classNames({
                [styles.activeItem]: isActive(opt.label),
              })}
              onClick={handleChange.bind(null, opt)}
              key={opt.key.toString()}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectField;
