import React from "react";
import { useLoaderData, useParams } from "react-router";
import { FaStarHalfAlt } from "react-icons/fa";
import { addToStoredDB } from "../../Utility/AddtoDB.JS";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";


const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookid = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookid);

  const {
    bookName,
    author,
    image,
    publisher,
    rating,
    totalPages,
    yearOfPublishing,
    review,
  } = singleBook;

  const handleMarkAsRead = (id) => {
    Swal.fire({
  title: "Good job!",
  text: "You clicked the button!",
  icon: "success"
});

    addToStoredDB(id);
  };
  return (
    <div className=" w-2/3 mx-auto md:flex my-10 gap-10">
      <img
        className="p-16 rounded-2xl bg-gray-100 w-[500px] "
        src={image}
        alt="Image Upcoming"
      />

      <div>
        <h1 className="text-[40px] font-bold">{bookName}</h1>
        <h2 className="text-xl font-medium">By: {author}</h2>
        <div className="border-t border-b my-4 border-gray-200">
          <h3 className="text-[#7a7979] text-xl font-medium my-4">Fiction</h3>
        </div>
        <h4>
          <span className="font-bold">Review : </span>{" "}
          <span className="text-[#13131370]">{review}</span>
        </h4>
        <h4 className="my-4">
          <span className="font-bold">Tag</span>{" "}
          <span className="text-[#23BE0A] bg-[#edffeb] px-3.5 rounded-full ">
            #{singleBook.tags[0]}
          </span>
          <span className="text-[#23BE0A] bg-[#edffeb] px-3.5 rounded-full ">
            #{singleBook.tags[1]}
          </span>
        </h4>
        <div className="my-6 border-t border-gray-200">
          <div className="my-4">
            <h4 className="mt-3">
              <span className="text-[#13131370]">Number of Pages:</span>
              <span className="font-semibold ml-14">{totalPages}</span>
            </h4>
            <h4 className="mt-3">
              <span className="text-[#13131370]">Publisher:</span>
              <span className="font-semibold ml-28">{publisher}</span>
            </h4>
            <h4 className="mt-3">
              <span className="text-[#13131370]">Year of Publishing:</span>
              <span className="font-semibold ml-12">{yearOfPublishing}</span>
            </h4>
            <h4 className="mt-3  flex">
              <span className="text-[#13131370] ">Rating:</span>
              <span className=" ml-32 font-semibold  flex items-center gap-2">
                <span>{rating}</span>{" "}
                <span>
                  <FaStarHalfAlt />
                </span>
              </span>
            </h4>
          </div>
        </div>
        <button onClick={() => handleMarkAsRead(id)} className="btn  m-2">
          Read
        </button>
        <button className="btn btn-info text-white m-2">WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
