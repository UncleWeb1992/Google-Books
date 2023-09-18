import { FC, useEffect, useRef } from "react";
import { IBook } from "types/types";
import styles from "./BookItem.module.scss";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "App/routes/routes";
import BookImg from "../../../assets/img/book.png";

type Props = {
  book: IBook;
};

const BookItem: FC<Props> = ({ book }) => {
  const navigate = useNavigate();
  const imageRef = useRef<HTMLImageElement>(null);

  const goInsideBook = () => {
    navigate(AppRoutes.Book, { state: { bookId: book.id } });
  };

  const getAutors = () => {
    if (!book.volumeInfo?.authors?.length) {
      return "";
    }

    const autors = book.volumeInfo.authors.map((autor) => {
      if (autor?.length > 50) {
        return autor.slice(0, 50) + "...";
      }

      return autor;
    });

    if (autors?.length > 5) {
      return autors.slice(0, 5).join(" / ");
    }

    return autors.join(" / ");
  };

  /**
   *
   *@description Lazy load images
   */
  const onWindow = ([entry]: IntersectionObserverEntry[]) => {
    if (entry.isIntersecting || entry.intersectionRatio >= 0.1) {
      const dataSrc = entry.target.getAttribute("data-src");
      entry.target.setAttribute("src", dataSrc);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onWindow, {
      rootMargin: "100px 0px 0px",
    });

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, [book]);

  return (
    <li onClick={goInsideBook} className={styles.book}>
      <img
        ref={imageRef}
        data-src={book.volumeInfo.imageLinks?.thumbnail || BookImg}
      />

      <div className={styles.content}>
        {book.volumeInfo?.categories?.length && (
          <article>{book.volumeInfo?.categories[0]}</article>
        )}

        <h2>{book.volumeInfo.title}</h2>
        <span>{getAutors()}</span>
      </div>
    </li>
  );
};

export default BookItem;
