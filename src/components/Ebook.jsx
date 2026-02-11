import React from "react";
import ebook from "../assets/ebook.png";

const Ebook = () => {
  return (
    <div className="flex items-stretch justify-between w-full h-[500px]">
      {/* Left Section: Text + Input */}
      <div className="flex flex-col gap-6 px-20 py-20 bg-gradient-to-r from-orange-100 to-gray-100 flex-1">
        <div className="flex items-center gap-2">
          <span className="block w-[40px] h-[3px] bg-orange-600"></span>
          <p className="text-xl font-bold text-orange-600">eBook</p>
        </div>

        <h2 className="text-4xl font-bold text-indigo-900">
          Access, Read, Practice & Engage With Digital Content
        </h2>

        <p className="text-gray-600 text-lg leading-7">
          Explore our digital library of eBooks for students and readers. Access
          study materials, practice guides, and interactive content anytime,
          anywhere. Learn at your own pace and enhance your skills with ease.
        </p>

        {/* Input + Button */}
        <div className="flex mt-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-[500px] px-4 py-3 bg-white outline-none rounded-l-md border border-gray-300"
          />
          <button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-r-md">
            Login
          </button>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className=" flex items-center justify-center bg-gray-50">
        <img src={ebook} alt="eBook" className="h-full object-contain" />
      </div>
    </div>
  );
};

export default Ebook;
