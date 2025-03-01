import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/api/book/book-by-id/${id}`)
      .then((response) => {
        console.log("Fetched Data:", response.data); // Debugging

        if (response.data) {
          setTitle(response.data.data.title || "");
          setAuthor(response.data.data.author || "");
          setPublishYear(response.data.data.publishYear || "");
        }

        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching book:", error);
        alert("An error occurred while fetching the book.");
      });
  }, [id]);

  const handleEditBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
    axios
      .put(`http://localhost:5555/api/book/update-by-id/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="p-6">
      <BackButton />
      <h1 className="text-3xl font-semibold text-center my-6 text-amber-800">
        Create Book
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center border-2 border-amber-300 rounded-xl w-[600px] p-6 mx-auto shadow-lg">
          <div className="w-full my-4">
            <label className="text-lg font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title} // Ensure value is correctly set
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-amber-500 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          <div className="w-full my-4">
            <label className="text-lg font-medium text-gray-700">Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="border-2 border-amber-500 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          <div className="w-full my-4">
            <label className="text-lg font-medium text-gray-700">
              Publish Year
            </label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-amber-500 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          <button
            onClick={handleEditBook}
            className="bg-amber-800 text-white text-lg font-medium px-6 py-2 mt-4 rounded-md hover:bg-amber-700 transition duration-300"
          >
            Edit Book
          </button>
        </div>
      )}
    </div>
  );
};

export default EditBook;
