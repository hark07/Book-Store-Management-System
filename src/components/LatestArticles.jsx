import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const LatestArticles = () => {
  return (
    <section className="bg-[#f7fbfc] py-10">
      {/* Fixed Laptop Container */}
      <div className="w-[1200px] mx-auto">
        {/* Small Heading */}
        <p className="text-xl text-gray-500 font-light text-center mb-5">
          Read our articles
        </p>

        {/* Main Heading with lines */}
        <div className="flex items-center gap-6 mb-20">
          <span className="flex-1 h-[1px] bg-gray-300"></span>

          <h2 className="text-5xl font-bold text-indigo-900 whitespace-nowrap">
            Latest Articles
          </h2>

          <span className="flex-1 h-[1px] bg-gray-300"></span>
        </div>

        {/* Cards Row */}
        <div className="flex justify-center gap-12">
          {/* Card 1 */}
          <div className="w-[360px] bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
            <img
              src="https://i0.wp.com/wearerestless.org/wp-content/uploads/2021/02/Reading-scaled.jpg?resize=1155%2C770&ssl=1"
              className="w-full h-[240px] object-cover rounded-lg"
              alt=""
            />

            <p className="text-xs text-gray-400 mt-4">10 Feb, 2026</p>

            <h3 className="text-lg font-semibold text-[#1f3b5c] mt-2 leading-snug">
              Top 10 Must-Read Books for Every Student
            </h3>

            <div className="flex gap-4 mt-4 text-gray-500">
              <FaFacebookF className="cursor-pointer hover:text-indigo-900" />
              <FaTwitter className="cursor-pointer hover:text-indigo-900" />
              <FaLinkedinIn className="cursor-pointer hover:text-indigo-900" />
            </div>
          </div>

          {/* Card 2 */}
          <div className="w-[360px] bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
            <img
              src="https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/6A2X8CFRQZch09jQwlDCrU/228a1c32b3bc48d27c53dd13333b6069/Shorelight_Best_English_Books.jpg?fit=thumb"
              className="w-full h-[240px] object-cover rounded-lg"
              alt=""
            />

            <p className="text-xs text-gray-400 mt-4">08 Feb, 2026</p>

            <h3 className="text-lg font-semibold text-[#1f3b5c] mt-2 leading-snug">
              How Reading Daily Improves Knowledge & Focus
            </h3>

            <div className="flex gap-4 mt-4 text-gray-500">
              <FaFacebookF className="cursor-pointer hover:text-indigo-900" />
              <FaTwitter className="cursor-pointer hover:text-indigo-900" />
              <FaLinkedinIn className="cursor-pointer hover:text-indigo-900" />
            </div>
          </div>

          {/* Card 3 */}
          <div className="w-[360px] bg-white rounded-xl shadow-md p-4 hover:shadow-xl transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDGhnDuCIOu6WHQJVoPqpIbuk50fTaLxVxw&s"
              className="w-full h-[240px] object-cover rounded-lg"
              alt=""
            />

            <p className="text-xs text-gray-400 mt-4">05 Feb, 2026</p>

            <h3 className="text-lg font-semibold text-[#1f3b5c] mt-2 leading-snug">
              Best Fiction & Story Books You Shouldn’t Miss
            </h3>

            <div className="flex gap-4 mt-4 text-gray-500">
              <FaFacebookF className="cursor-pointer hover:text-indigo-900" />
              <FaTwitter className="cursor-pointer hover:text-indigo-900" />
              <FaLinkedinIn className="cursor-pointer hover:text-indigo-900" />
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-24 text-center">
          <button className="border border-gray-300 px-12 py-3 text-xs tracking-widest text-[#1f3b5c] hover:bg-[#1f3b5c] hover:text-white transition">
            READ ALL ARTICLES →
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
