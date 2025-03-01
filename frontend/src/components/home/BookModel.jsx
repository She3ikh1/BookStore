import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import React from "react";

const BookModel = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full h-auto bg-white rounded-xl p-6 flex flex-col relative shadow-lg text-center"
      >
        {/* Close Button */}
        <AiOutlineClose
          className="absolute right-6 top-6 text-2xl text-red-600 cursor-pointer hover:text-red-800 transition duration-200"
          onClick={onClose}
        />

        {/* Book Publish Year */}
        <h2 className="w-fit px-4 py-1 bg-amber-400 rounded-lg mx-auto text-lg font-semibold">
          {book.publishYear}
        </h2>

        {/* Book ID */}
        <h4 className="my-2 text-gray-500 text-sm">{book._id}</h4>

        {/* Book Title */}
        <div className="flex justify-center items-center gap-x-2 mt-2">
          <PiBookOpenTextLight className="text-red-400 text-2xl" />
          <h2 className="text-lg font-semibold">{book.title}</h2>
        </div>

        {/* Author */}
        <div className="flex justify-center items-center gap-x-2 mt-2">
          <BiUserCircle className="text-red-400 text-2xl" />
          <h2 className="text-lg font-semibold">{book.author}</h2>
        </div>

        {/* Description */}
        <p className="mt-4 text-gray-600 font-medium">Book Description</p>
        <p className="my-2 text-gray-500 text-sm px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque
          aliquam dolorum et alias vel, autem nesciunt voluptas dicta ipsa
          accusantium enim ratione nostrum dolore itaque officia. Optio, nisi
          veritatis.
        </p>
      </div>
    </div>
  );
};

export default BookModel;
