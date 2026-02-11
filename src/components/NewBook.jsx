import React from "react";
import Bookall from "../assets/books.png";

const NewBook = () => {
  return (
    <div className="p-20 bg-white">
      <div className="w-full flex items-center justify-between bg-pink-50 rounded-xl px-20 py-10">
        {/* Left Content */}
        <div className="w-1/2">
          <h2 className="text-4xl font-bold text-indigo-900 leading-snug">
            All Books Are 50% Off Now!
            <br />
            Don’t Miss This Special Deal
          </h2>

          {/* Description */}
          <p className="text-gray-700 mt-4 text-sm font-medium leading-relaxed">
            Explore our huge collection of bestselling novels, academic books,
            self-help guides, and storybooks at half price. This limited-time
            offer is perfect for readers who love discovering new knowledge and
            adventures. Grab your favorite titles today before the sale ends.
          </p>

          {/* Countdown */}
          <div className="flex gap-8 mt-8">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">768</p>
              <p className="text-sm font-semibold">DAYS</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">01</p>
              <p className="text-sm font-semibold">HOURS</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">27</p>
              <p className="text-sm font-semibold">MIN</p>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">55</p>
              <p className="text-sm font-semibold">SEC</p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-8 bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700">
            Shop Now
          </button>
        </div>

        {/* Right Image */}
        <div className="w-1/2 flex justify-end">
          <img src={Bookall} alt="Books" className="w-[480px]" />
        </div>
      </div>
    </div>
  );
};

export default NewBook;
