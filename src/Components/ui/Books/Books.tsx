import { FC } from "react";
import { IBook } from "types/types";
import styles from "./Books.module.scss";
import { Container } from "Components/common/Container";
import { BookItem } from "../BookItem";

type Props = {
  data: IBook[];
};

const Books: FC<Props> = ({ data }) => {
  return (
    <div className={styles.books}>
      <Container>
        <ul className={styles.bookList}>
          {!!data &&
            data.map((book, i) => <BookItem key={i.toString()} book={book} />)}
        </ul>

        {!data?.length && <span>No books</span>}
      </Container>
    </div>
  );
};

export default Books;
