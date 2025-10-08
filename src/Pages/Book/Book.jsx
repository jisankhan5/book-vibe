import { Link } from "react-router";
const Book = ({ book }) => {
  const { bookName, image, bookId, totalPages,rating } = book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className=" card-body card bg-base-100 w-80 shadow-lg mt-5 hover:scale-120 border border-gray-200 transition ease-in-out ">
        <figure className="p-3 bg-[#F3F3F3]">
          <img className="h-[166px]" src={image} alt="Image Upcoming" />
        </figure>
        <h2 className="text-2xl font-bold my-3">{bookName}</h2>
       <div className="flex justify-between">
         <h2 className="card-title btn">Pages: {totalPages}</h2>
         <h2 className="card-title btn">Rating: {rating}</h2>
       </div>
      </div>
    </Link>
  );
};

export default Book;
