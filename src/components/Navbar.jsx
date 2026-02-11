import React from "react";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaBloggerB } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container mx-auto">
      {/* ================= TOP BAR ================= */}
      <div className="bg-blue-950 px-20 py-4 flex items-center justify-between">
        {/* Phone */}
        <div className="flex items-center gap-3">
          <FaPhone className="w-4 h-4 text-white" />
          <p className="text-white font-semibold">+977 9862460586</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <FaFacebookF className="w-5 h-5 text-white hover:scale-110 transition cursor-pointer" />{" "}
          <FaInstagram className="w-5 h-5 text-white hover:scale-110 transition cursor-pointer" />{" "}
          <FaLinkedinIn className="w-5 h-5 text-white hover:scale-110 transition cursor-pointer" />{" "}
          <FaTwitter className="w-5 h-5 text-white hover:scale-110 transition cursor-pointer" />{" "}
          <FaBloggerB className="w-5 h-5 text-white hover:scale-110 transition cursor-pointer" />
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="px-20">
        <div className="bg-white py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="bg-gray-200 w-[90px] h-[90px] rounded-full flex items-center justify-center font-bold text-xl">
            Logo
          </div>

          {/* Search Bar */}
          <div className="flex items-center bg-gray-200 rounded-full px-6 py-3 w-[600px]">
            <input
              type="search"
              placeholder="Search Book..."
              className="flex-1 bg-transparent outline-none text-lg"
            />
            <LiaSearchSolid className="text-black w-6 h-6 cursor-pointer" />
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-8">
            {/* Account */}
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
              <AiOutlineUser className="w-6 h-6" />
              <p className="font-semibold">Account</p>
            </div>

            {/* Cart */}
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition relative">
              <HiOutlineShoppingBag className="w-6 h-6" />
              <p className="font-semibold">Cart</p>

              {/* Cart Count Badge */}
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 rounded-full">
                0
              </span>
            </div>

            {/* Wishlist */}
            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition">
              <CiHeart className="w-6 h-6" />
              <p className="font-semibold">Wishlist</p>
            </div>
          </div>
        </div>

        <span className="block bg-gray-300 w-full h-[3px]"></span>

        {/* ================= MENU BAR ================= */}
        <div className="py-5">
          <ul className="flex items-center justify-center gap-8 text-sm tracking-widest">
            <Link to="/" className="text-red-500 cursor-pointer text-xl hover:font-semibold">
              HOME
            </Link>
            <span className="text-gray-400">|</span>

            <Link to="/about" className="hover:text-red-500 cursor-pointer text-xl hover:font-semibold">
              ABOUT US
            </Link>
            <span className="text-gray-400">|</span>

            <li className="hover:text-red-500 cursor-pointer text-xl hover:font-semibold">
              BOOKS
            </li>
            <span className="text-gray-400">|</span>

            <Link to="/newrelease" className="hover:text-red-500 cursor-pointer text-xl hover:font-semibold">
              NEW RELEASE
            </Link>
            <span className="text-gray-400">|</span>

            <Link to="/contact" className="hover:text-red-500 cursor-pointer text-xl hover:font-semibold">
              CONTACT US
            </Link>
            <span className="text-gray-400">|</span>

            <Link to="/blog" className="hover:text-red-500 cursor-pointer text-xl hover:font-semibold">
              BLOG
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
