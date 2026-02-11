import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Blog = () => {
  return (
    <section className="bg-[#F7FCFC] py-24 px-20">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-xl text-gray-500 font-light mb-2">READ OUR BLOG</p>
        <h2 className="text-4xl font-bold text-[#1f3b5c]">Latest Blog Posts</h2>
      </div>

      {/* Blog Cards */}
      <div className="flex justify-between gap-10">

        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex-1">
          <img
            src="https://i0.wp.com/wearerestless.org/wp-content/uploads/2021/02/Reading-scaled.jpg?resize=1155%2C770&ssl=1"
            alt="Blog 1"
            className="w-full h-[260px] object-cover"
          />
          <div className="p-6">
            <p className="text-xs text-gray-400 mb-2">10 Feb, 2026</p>
            <h3 className="text-lg font-semibold text-[#1f3b5c] mb-3">
              Top 10 Books Every Student Should Read
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Discover essential books for academic growth, personal development, and creativity.
            </p>
            <div className="flex gap-4 text-gray-500">
              <FaFacebookF className="cursor-pointer hover:text-indigo-900" />
              <FaTwitter className="cursor-pointer hover:text-indigo-900" />
              <FaLinkedinIn className="cursor-pointer hover:text-indigo-900" />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex-1">
          <img
            src="https://marvel-b1-cdn.bc0a.com/f00000000290162/images.ctfassets.net/2htm8llflwdx/6A2X8CFRQZch09jQwlDCrU/228a1c32b3bc48d27c53dd13333b6069/Shorelight_Best_English_Books.jpg?fit=thumb"
            alt="Blog 2"
            className="w-full h-[260px] object-cover"
          />
          <div className="p-6">
            <p className="text-xs text-gray-400 mb-2">08 Feb, 2026</p>
            <h3 className="text-lg font-semibold text-[#1f3b5c] mb-3">
              How Daily Reading Improves Knowledge
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Learn how reading every day helps improve focus, knowledge retention, and creativity.
            </p>
            <div className="flex gap-4 text-gray-500">
              <FaFacebookF className="cursor-pointer hover:text-indigo-900" />
              <FaTwitter className="cursor-pointer hover:text-indigo-900" />
              <FaLinkedinIn className="cursor-pointer hover:text-indigo-900" />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden flex-1">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDGhnDuCIOu6WHQJVoPqpIbuk50fTaLxVxw&s"
            alt="Blog 3"
            className="w-full h-[260px] object-cover"
          />
          <div className="p-6">
            <p className="text-xs text-gray-400 mb-2">05 Feb, 2026</p>
            <h3 className="text-lg font-semibold text-[#1f3b5c] mb-3">
              Best Fiction & Story Books You Shouldn’t Miss
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Explore the top fiction and story books that inspire creativity and imagination in students.
            </p>
            <div className="flex gap-4 text-gray-500">
              <FaFacebookF className="cursor-pointer hover:text-indigo-900" />
              <FaTwitter className="cursor-pointer hover:text-indigo-900" />
              <FaLinkedinIn className="cursor-pointer hover:text-indigo-900" />
            </div>
          </div>
        </div>

      </div>

      {/* Button */}
      <div className="mt-16 text-center">
        <button className="border border-gray-300 px-8 py-3 text-xs tracking-widest text-[#1f3b5c] hover:bg-[#1f3b5c] hover:text-white transition">
          READ ALL BLOGS →
        </button>
      </div>

    </section>
  );
};

export default Blog;
