import React from "react";
import img from '../../assets/book.png'

const Banner = () => {
  return (
    <div className="bg-[#F3F3F3] my-10 rounded-3xl p-20 md:flex justify-between items-center">
      <div>
        <h1 className="text-[56px] font-bold">Books to freshen up <br /> your bookshelf</h1>
        <button className="btn bg-[#23BE0A] text-white mt-10">View The List</button>
      </div>
      <div>
        <img className="mt-10 md:mt-0" src={img} alt="Img Upcoming" />
      </div>
    </div>
  );
};

export default Banner;
