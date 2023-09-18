import { FC } from "react";
import styles from "./Book.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppSelector } from "hook/redux";
import { getBookOfId } from "store/Slieces/bookSlice";
import BookImg from "../../assets/img/book.png";
import FiltersLayout from "Components/Layouts/FiltersLauout/FiltersLauout";
import { Container } from "Components/common/Container";

const Book: FC = () => {
  const navigate = useNavigate();
  const {
    state: { bookId },
  } = useLocation();
  const booksOfId = useAppSelector(getBookOfId(bookId));

  if (!booksOfId) {
    navigate(-1);
  } 

  if (booksOfId) {
    return (
      <FiltersLayout>
        <Container>
          <div className={styles.book}>
            <img src={booksOfId.volumeInfo?.imageLinks?.thumbnail || BookImg} />
            <div className={styles.content}>
              {booksOfId.volumeInfo?.categories?.length && (
                <span>{booksOfId?.volumeInfo?.categories[0]}</span>
              )}

              <h2>{booksOfId.volumeInfo.title}</h2>

              {!!booksOfId.volumeInfo?.authors?.length && (
                <article>{booksOfId.volumeInfo?.authors.join(" / ")}</article>
              )}

              {booksOfId.volumeInfo?.description && (
                <p>{booksOfId.volumeInfo?.description}</p>
              )}
            </div>
          </div>
        </Container>
      </FiltersLayout>
    );
  }
};

export default Book;
