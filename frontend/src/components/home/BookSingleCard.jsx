import React from "react";
import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import BookModel from "./BookModel.jsx";
import { useState } from "react";

const BookSingleCard = ({ book }) => {
  const [showModel, setShowModel] = useState(false);
  return (
    <div
      key={book._id}
      className="border-2 border-amber-500 rounded-lg px-4 py-2 m-4 relative hover-shadow-xl"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-amber-400 rounded-lg">
        {book.publishYear}
      </h2>
      <h4 className="my-2 text-gray-600">{book._id}</h4>

      <div className="flex justify-start items-center gap-x-2">
        <PiBookOpenTextLight className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <BiUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>

      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BiShow
          className="text-3xl text-blue-600 hover:text-amber-950 cursor-pointer"
          onClick={() => setShowModel(true)}
        />
        <Link
          to={`api/book/book-by-id/${book._id}`}
          className="text-yellow-600 hover:text-yellow-800 transition duration-200"
        >
          <BsInfoCircle className="text-2xl" />
        </Link>

        <Link
          to={`/api/book/update-by-id/${book._id}`}
          className="text-green-600 hover:text-green-800 transition duration-200"
        >
          <AiOutlineEdit className="text-2xl" />
        </Link>
        <Link
          to={`/api/book/delete-by-id/${book._id}`}
          className="text-red-600 hover:text-red-800 transition duration-200"
        >
          <MdOutlineDelete className="text-2xl" />
        </Link>
      </div>
      {showModel && (
        <BookModel book={book} onClose={() => setShowModel(false)} />
      )}
    </div>
  );
};

export default BookSingleCard;
