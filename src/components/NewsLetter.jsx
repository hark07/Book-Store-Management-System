import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#dceeee] flex items-center justify-center py-24">
      <div className="w-[700px] text-center space-y-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-indigo-900">
          Subscribe to Our Newsletter
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed">
          Stay updated with our latest book releases, exclusive discounts,
          special offers, and reading recommendations. Join our newsletter and
          never miss exciting deals from your favorite bookstore.
        </p>

        {/* Input + Button */}
        <div className="flex items-center justify-center mt-6">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-[420px] px-5 py-3 rounded-l-lg border border-gray-300 outline-none"
          />

          <button className="bg-orange-600 text-white px-6 py-3 rounded-r-lg font-semibold hover:bg-orange-700">
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
