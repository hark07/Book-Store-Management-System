import React from "react";

const NewRelease = () => {
  const books = [
    {
      title: "Introduction to Algorithms",
      author: "Cormen, Leiserson, Rivest, Stein",
      img: "https://d3525k1ryd2155.cloudfront.net/f/933/032/9780262032933.IN.0.l.jpg",
    },
    {
      title: "Data Structures and Algorithms in Java",
      author: "Robert Lafore",
      img: "https://m.media-amazon.com/images/I/51esAdVZLNL._UF1000,1000_QL80_.jpg",
    },
    {
      title: "Problem Solving with Algorithms & Data Structures",
      author: "Bradley Miller",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1S9Qv6aMyn_0cS-mtFNCfaBr6mqy0aMlUgQ&s",
    },
    {
      title: "Python Crash Course",
      author: "Eric Matthes",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG80Q6o6GVVN02Ufly7fzp4N1MSks6no2gHw&s",
    },
    {
      title: "Machine Learning Guide",
      author: "T. Sharma",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvVivg_oyzTQuS3YA7bvA68tqiPQXDrGHGrA&s",
    },
    {
      title: "Effective Java",
      author: "Joshua Bloch",
      img: "https://m.media-amazon.com/images/I/61ez1J++DXL._UF1000,1000_QL80_.jpg",
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      img: "https://images-na.ssl-images-amazon.com/images/I/41xShlnTZTL._SX374_BO1,204,203,200_.jpg",
    },
    {
      title: "Computer Networks",
      author: "Andrew S. Tanenbaum",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIaUYXctypfAJ31wfR2FAtFCOb6pwoAM0mbA&s",
    },
  ];

  return (
    <section className="bg-[#F7FCFC] py-24 px-10">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-xl text-gray-500 font-light mb-2">NEW RELEASES</p>
        <h2 className="text-4xl font-bold text-[#1f3b5c]">Latest Books</h2>
      </div>

      {/* Book Cards */}
      <div className="flex flex-wrap gap-8 justify-center">
        {books.map((book, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden w-[300px] flex-shrink-0"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#1f3b5c] mb-2">
                {book.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Author: {book.author}
              </p>
              <button className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="mt-16 text-center">
        <button className="border border-gray-300 px-8 py-3 text-xs tracking-widest text-[#1f3b5c] hover:bg-[#1f3b5c] hover:text-white transition">
          VIEW ALL NEW RELEASES →
        </button>
      </div>

    </section>
  );
};

export default NewRelease;
