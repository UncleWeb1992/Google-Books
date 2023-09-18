import { FC } from "react";
import styles from "./Filters.module.scss";
import { SelectFIeld } from "Components/common/SelectField";
import { IOptions } from "types/types";

interface Props {
  filterCategories: string;
  filterSorted: string;
  categoriesOptions: IOptions[];
  sortedOptions: IOptions[];
  onChnage: (option: IOptions, fieldName?: string) => void;
}

const Filters: FC<Props> = ({
  categoriesOptions,
  filterCategories,
  filterSorted,
  sortedOptions,
  onChnage,
}) => {
  return (
    <div className={styles.filters}>
      <SelectFIeld
        classess={{ root: styles.select, select: styles.selectValue }}
        value={filterCategories}
        label="Categories"
        fieldName="categories"
        onChange={onChnage}
        options={categoriesOptions}
      />
      <SelectFIeld
        classess={{ root: styles.select, select: styles.selectValue }}
        value={filterSorted}
        label="Sorted by"
        fieldName="sorted"
        onChange={onChnage}
        options={sortedOptions}
      />
    </div>
  );
};

export default Filters;
