import React from "react";
import HappBook from "../assets/book.png";

const FeatureBook = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-gray-50 pl-50 pr-150  py-10 flex items-center gap-20">
      {/* Book Image */}
      <img
        src={HappBook}
        alt="Book"
        className="w-[350px] h-[400px] object-cover rounded-md"
      />

      {/* Book Info */}
      <div className="flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-gray-500">Featured Book</h3>
        <span className="block w-[50px] h-[3px] bg-orange-600"></span>
        <p className="uppercase text-sm text-gray-400 font-semibold">
          By Timbur Hood
        </p>
        <h2 className="text-2xl font-bold text-indigo-900">Birds Gonna Be Happy</h2>
        <p className="text-gray-700 leading-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
          feugiat amet, libero ipsum enim pharetra hac.
        </p>
        <p className="text-xl font-bold text-orange-600 mt-5">$45.00</p>

        <div className="mt-10">
          <button className="uppercase border border-indigo-900 text-indigo-900 px-8 py-3 rounded-md hover:bg-indigo-900 hover:text-white transition">
          View More →
        </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureBook;
