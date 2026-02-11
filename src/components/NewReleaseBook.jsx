import React from "react";

const NewReleaseBook = () => {
  return (
    <div className="bg-white px-2">
      <p className="text-xl text-gray-500 font-light text-center mt-20">
        Some Quality Items
      </p>
      <div className="flex items-center gap-4 mt-5">
        <span className="flex-1 h-[1px] bg-gray-300"></span>
        <p className="text-5xl font-bold text-indigo-900 whitespace-nowrap">
          New Release Books
        </p>
        <span className="flex-1 h-[1px] bg-gray-300"></span>
      </div>

      <div className="mt-10 flex items-center justify-center gap-5">
        {/* Product 1 */}
        <div className="px-4 py-2 bg-white border border-gray-200 rounded-md">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://m.media-amazon.com/images/I/51xiwRkS2oL.jpg"
              alt="Book"
              className="w-[150px] h-[200px] p-1 hover:scale-105 rounded-md"
            />
          </div>
          {/* Info */}
          <div className="mt-2">
            <p className="text-sm font-bold text-indigo-900">
              Programming With Java
            </p>
            <p className="text-sm text-gray-500 font-normal mt-1">
              E Balagurusamy
            </p>
            <div className="flex items-center justify-between gap-2 mt-2">
              <div className="flex flex-col items-start">
                <span className="text-xl font-semibold">$250</span>
                <span className="text-sm text-gray-400 font-normal line-through">
                  $350
                </span>
              </div>
              <button className="bg-orange-600 text-white p-2 rounded-md cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 2 */}
        <div className="px-4 py-2 bg-white border border-gray-200 rounded-md">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://images.booksense.com/images/657/071/9798863071657.jpg"
              alt="Book"
              className="w-[150px] h-[200px] p-1 hover:scale-105 rounded-md"
            />
          </div>
          {/* Info */}
          <div className="mt-2">
            <p className="text-sm font-bold text-indigo-900">
              Data Structure & Algorithm
            </p>
            <p className="text-sm text-gray-500 font-normal mt-1">
              Independently Published
            </p>
            <div className="flex items-center justify-between gap-2 mt-2">
              <div className="flex flex-col items-start">
                <span className="text-xl font-semibold">$19.99</span>
                <span className="text-sm text-gray-400 font-normal line-through">
                  $50
                </span>
              </div>
              <button className="bg-orange-600 text-white p-2 rounded-md cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="px-4 py-2 bg-white border border-gray-200 rounded-md">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://images.manning.com/360/480/resize/book/4/48bdbd0-19ed-4259-898b-88e9fd2b7a32/Larsen_hires.png"
              alt="Book"
              className="w-[150px] h-[200px] p-1 hover:scale-105 rounded-md"
            />
          </div>
          {/* Info */}
          <div className="mt-2">
            <p className="text-sm font-bold text-indigo-900">
              Programming JavaScript
            </p>
            <p className="text-sm text-gray-500 font-normal mt-1">
              John R. Larsen
            </p>
            <div className="flex items-center justify-between gap-2 mt-2">
              <div className="flex flex-col items-start">
                <span className="text-xl font-semibold">$15.99</span>
                <span className="text-sm text-gray-400 font-normal line-through">
                  $39
                </span>
              </div>
              <button className="bg-orange-600 text-white p-2 rounded-md cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 3 */}
        <div className="px-4 py-2 bg-white border border-gray-200 rounded-md">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1576707604i/49444404.jpg"
              alt="Book"
              className="w-[150px] h-[200px] p-1 hover:scale-105 rounded-md"
            />
          </div>
          {/* Info */}
          <div className="mt-2">
            <p className="text-sm font-bold text-indigo-900">
              Programming in Python
            </p>
            <p className="text-sm text-gray-500 font-normal mt-1">
              unknown authors
            </p>
            <div className="flex items-center justify-between gap-2 mt-2">
              <div className="flex flex-col items-start">
                <span className="text-xl font-semibold">$79.99</span>
                <span className="text-sm text-gray-400 font-normal line-through">
                  $99
                </span>
              </div>
              <button className="bg-orange-600 text-white p-2 rounded-md cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 4 */}
        <div className="px-4 py-2 bg-white border border-gray-200 rounded-md">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://cdn2.penguin.com.au/covers/400/9780262535434.jpg"
              alt="Book"
              className="w-[150px] h-[200px] p-1 hover:scale-105 rounded-md"
            />
          </div>
          {/* Info */}
          <div className="mt-2">
            <p className="text-sm font-bold text-indigo-900">Data Science</p>
            <p className="text-sm text-gray-500 font-normal mt-1">
              John D. Kelleher
            </p>
            <div className="flex items-center justify-between gap-2 mt-2">
              <div className="flex flex-col items-start">
                <span className="text-xl font-semibold">$99.99</span>
                <span className="text-sm text-gray-400 font-normal line-through">
                  $109
                </span>
              </div>
              <button className="bg-orange-600 text-white p-2 rounded-md cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>

        {/* Product 5 */}
        <div className="px-4 py-2 bg-white border border-gray-200 rounded-md">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src="https://www.worldscientific.com/cms/10.1142/12037/asset/18ee2895-8d18-e289-38d1-ee289538d18e/12037.cover.jpg"
              alt="Book"
              className="w-[150px] h-[200px] p-1 hover:scale-105 rounded-md"
            />
          </div>
          {/* Info */}
          <div className="mt-2">
            <p className="text-sm font-bold text-indigo-900">
              Machine Learning
            </p>
            <p className="text-sm text-gray-500 font-normal mt-1">
              Minsoo Kang
            </p>
            <div className="flex items-center justify-between gap-2 mt-2">
              <div className="flex flex-col items-start">
                <span className="text-xl font-semibold">$89</span>
                <span className="text-sm text-gray-400 font-normal line-through">
                  $99
                </span>
              </div>
              <button className="bg-orange-600 text-white p-2 rounded-md cursor-pointer">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      <span className="block bg-gray-300 w-full h-[1px] my-10"></span>
    </div>
  );
};

export default NewReleaseBook;
