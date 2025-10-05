import React, { Suspense, useState } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allbooks, setAllBooks] = useState([]);
  //   useEffect(() => {
  //     fetch("bookData.json")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setAllBooks(data);
  //       });
  //   }, []);
  //   const bookPromise = fetch("./bookData.json").then((res) => res.json());

  return (
    <div>
      <h1 className="text-center text-3xl p-6 font-bold">Books</h1>
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 ml-0 md:ml-28">
          {data.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
