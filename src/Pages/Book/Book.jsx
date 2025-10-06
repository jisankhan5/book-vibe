import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";
const Book = ({ book }) => {
  const {
    bookName,
    author,
    image,
    category,
    publisher,
    rating,
    totalPages,
    yearOfPublishing,
    bookId,
  } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className=" card-body card bg-base-100 w-80 shadow-lg mt-5 hover:scale-120 border border-gray-200 transition ease-in-out">
        <figure className="p-3 bg-[#F3F3F3]">
          <img className="h-[166px]" src={image} alt="Image Upcoming" />
        </figure>
        <h2 className="card-title">{bookName}</h2>
        <div className="grid grid-cols-2">
          <h3 className="font-semibold">By: {author}</h3>
          <p>
            Type: {book.tags[0]} {book.tags[1]}
          </p>
          <h3>Category: {category}</h3>
          <h3 className="font-medium">Publisher:{publisher}</h3>
          <h3>TotalPages: {totalPages}</h3>
          <h3>YearOfPublishing: {yearOfPublishing}</h3>
          <h3 className="flex items-center gap-2">
            Rating: {rating} <FaStarHalfAlt />
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default Book;
