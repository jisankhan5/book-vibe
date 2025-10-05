const Book = ({ book }) => {
  console.log(book);
  const {
    bookName,
    author,
    image,
    category,
    publisher,
    rating,
    review,
    totalPages,
    yearOfPublishing,
  } = book;

  return (
    <div className=" card-body card bg-base-100 w-80 shadow-sm mt-5">
      <figure className="p-3 bg-[#F3F3F3]">
        <img className="h-[166px]" src={image} alt="Image Upcoming" />
      </figure>
      <div className="">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
      </div>
    </div>
  );
};

export default Book;
