import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      {/* Container (NO fixed width) */}
      <div className="container mx-auto px-20 flex justify-between">
        {/* Left Section */}
        <div className="max-w-[320px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">
              B
            </div>

            <span className="text-xl font-semibold text-[#1f3b5c]">
              BookStore
            </span>
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Discover thousands of books, ebooks, and learning resources. We
            provide the best reading experience with exclusive deals and latest
            releases for every reader.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-white">
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer">
              <FaFacebookF size={14} />
            </div>
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer">
              <FaLinkedinIn size={14} />
            </div>
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer">
              <FaTwitter size={14} />
            </div>
            <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center cursor-pointer">
              <FaYoutube size={14} />
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-red-500 font-bold mb-6 tracking-wide">COMPANY</h4>

          <ul className="space-y-3 text-sm font-semibold text-[#1f3b5c]">
            <li className="cursor-pointer hover:text-orange-600">HOME</li>
            <li className="cursor-pointer hover:text-orange-600">ABOUT US</li>
            <li className="cursor-pointer hover:text-orange-600">BOOKS</li>
            <li className="cursor-pointer hover:text-orange-600">EBOOKS</li>
            <li className="cursor-pointer hover:text-orange-600">
              NEW RELEASE
            </li>
            <li className="cursor-pointer hover:text-orange-600">CONTACT US</li>
            <li className="cursor-pointer hover:text-orange-600">BLOG</li>
          </ul>
        </div>

        {/* Latest News */}
        <div className="max-w-[380px]">
          <h4 className="text-red-500 font-bold mb-6 tracking-wide">
            LATEST NEWS
          </h4>

          <div className="flex gap-4 mb-6">
            <img
              src="https://browncowenglish.com/wp-content/uploads/2021/02/WhatsAppImage2021-02-02at11_14_27_4abef2e1146ee4db04e05f1a242bf54f_2000.jpeg"
              className="w-16 h-16 rounded object-cover"
              alt=""
            />

            <div>
              <p className="text-sm font-semibold text-orange-600">
                New Collection Released
              </p>
              <p className="text-xs text-gray-500 leading-snug">
                Explore our newest arrivals including novels and self-help
                books.
              </p>
              <p className="text-xs text-gray-400 mt-1">15 April 2026</p>
            </div>
          </div>

          <div className="flex gap-4">
            <img
              src="https://allroundclub.com/blog/wp-content/uploads/2021/08/5-books-every-kid-from-age-5-8-should-read.png"
              className="w-16 h-16 rounded object-cover"
              alt=""
            />

            <div>
              <p className="text-sm font-semibold text-orange-600">
                50% Mega Sale Started
              </p>
              <p className="text-xs text-gray-500 leading-snug">
                Grab your favorite books at half price for a limited time.
              </p>
              <p className="text-xs text-gray-400 mt-1">10 April 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto px-10 mt-10 flex justify-between text-sm text-gray-500 pt-6">
        <p>© 2026 BookStore. All Rights Reserved.</p>

        <p>
          <span className="text-red-500 cursor-pointer">Privacy</span> | Terms
          of Service
        </p>
      </div>
    </footer>
  );
};

export default Footer;
