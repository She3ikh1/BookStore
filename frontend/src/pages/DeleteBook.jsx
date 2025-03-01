import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/api/book/delete-by-id/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
        console.log("Book deleted");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error occurred");
        console.log(error);
      });
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <BackButton />
      <h1 className="text-3xl font-semibold text-center my-6 text-amber-800">
        Delete Book
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="border-2 border-amber-500 rounded-xl w-[500px] p-6 mx-auto shadow-lg text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-4">
            Are you sure you want to delete this book?
          </h3>
          <button
            className="bg-red-600 text-white text-lg font-medium px-6 py-3 rounded-md w-full hover:bg-red-700 transition duration-300"
            onClick={handleDeleteBook}
          >
            Delete Book
          </button>
        </div>
      )}
    </div>
  );
};

export default DeleteBook;
