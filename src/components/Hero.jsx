import React from "react";

const books = [
  "https://bookcover4u.com/pro/P1484804032EDB-Java-3D-BC4U.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/71S6PRR963L.jpg",
  "https://tse3.mm.bing.net/th/id/OIP.Vnja0drf_glIwpcHFIqi_QHaLZ?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://th.bing.com/th/id/R.d4025246438d5daa7e7492d5482d1862?rik=EfkqmPAUF%2bvvtQ&pid=ImgRaw&r=0",
  "https://tse2.mm.bing.net/th/id/OIP.T4t5IZIoQYG-GJru2A3kzgHaL2?rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://m.media-amazon.com/images/I/81iXn5LPFiL._SL1500_.jpg",
];

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-200 to-gray-100 py-20">
      <div className="container mx-auto px-20 grid grid-cols-2 gap-10 items-center">
        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-6">
          <h1 className="text-6xl font-bold text-indigo-900">
            Book Store – JMC
          </h1>

          <p className="text-gray-600 text-lg leading-8 max-w-xl">
            The Book Store at Janajyoti Multiple Campus is an online platform
            for students and staff to easily browse, search, and purchase
            academic and general books. It offers book categories, details, and
            a convenient shopping experience to support learning and reading.
          </p>

          {/* Button */}
          <button className="border border-indigo-900 text-indigo-900 px-8 py-3 rounded-md hover:bg-indigo-900 hover:text-white transition">
            READ MORE →
          </button>

          {/* Slider dots */}
          <div className="flex gap-3 pt-6">
            <span className="w-4 h-4 border-2 border-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          </div>
        </div>

        {/* ================= RIGHT BOOK GRID ================= */}
        <div className="grid grid-cols-3 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img src={book} alt="book" className="w-full h-56 object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
