import React from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// Import your images
import Books1 from "../assets/BCABook.png";
import Books2 from "../assets/ManagementBook.png";
import Books3 from "../assets/HigherEducation.png";

const Categories = () => {
  return (
    <div className="bg-white px-20 py-20">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <span className="block w-[40px] h-[3px] bg-orange-600"></span>
            <p className="text-xl font-bold text-orange-600">Categories</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900">
            Explore Our Top Categories
          </h2>
          <div className="flex items-center gap-5 mt-2">
            <IoIosArrowRoundBack className="w-10 h-10 p-1 border rounded-full hover:border-none hover:bg-orange-600 hover:text-white transition cursor-pointer" />
            <IoIosArrowRoundForward className="w-10 h-10 p-1 border rounded-full bg-orange-600 text-white hover:bg-orange-700 transition cursor-pointer" />
          </div>
        </div>

        {/* Description */}
        <div className="max-w-xl">
          <p className="text-gray-600 text-lg leading-8">
            Discover a variety of book categories curated for students and
            readers. From academic textbooks to management guides and higher
            education materials, browse our top categories to find the books
            that fit your learning and reading needs.
          </p>
        </div>
      </div>

      {/* Category Cards */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 mt-10">
        {/* Category 1 */}
        <div className="text-center">
          <img
            src={Books1}
            alt="Computer Science Books"
            className="rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-4 text-indigo-900">
            Computer Science
          </h2>
          <p className="text-gray-600 mt-2">
            Explore textbooks, programming guides, and reference materials for
            computer science students and enthusiasts.
          </p>
        </div>

        {/* Category 2 */}
        <div className="text-center">
          <img src={Books2} alt="Management Books" className=" rounded-lg " />
          <h2 className="text-xl font-semibold mt-4 text-indigo-900">
            Management Books
          </h2>
          <p className="text-gray-600 mt-2">
            Find books on business, leadership, entrepreneurship, and management
            studies to enhance your skills.
          </p>
        </div>

        {/* Category 3 */}
        <div className="text-center">
          <img
            src={Books3}
            alt="Higher Education Books"
            className="rounded-lg"
          />
          <h2 className="text-xl font-semibold mt-4 text-indigo-900">
            Higher Education
          </h2>
          <p className="text-gray-600 mt-2">
            Access academic books for advanced studies, research, and
            university-level courses across various fields.
          </p>
        </div>
      </div>

      {/* View More */}
      <div className="flex items-center justify-center mt-10">
        <button className="uppercase border border-indigo-900 text-indigo-900 px-8 py-3 rounded-md hover:bg-indigo-900 hover:text-white transition">
          View More →
        </button>
      </div>
    </div>
  );
};

export default Categories;
