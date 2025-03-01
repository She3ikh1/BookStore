import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { toast } from "react-toastify";


const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = { title, author, publishYear };
    setLoading(true);
  
    axios.post("http://localhost:5555/api/book/add", data)
      .then((response) => {
        console.log(response); // Debugging: See the response
        setLoading(false);
        if (response?.data?.message) {
          toast.success(response.data.message);
        } else {
          toast.success("Book added successfully!");
        }
  
        // Delay navigation to allow toast to show
      navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.error("API Error:", error);
        toast.error(error.response?.data?.message || "Failed to add book!");
      });
  };
  

  return (
    <div className="p-6">
      <BackButton />
      <h1 className="text-3xl font-semibold text-center my-6 text-amber-800">Create Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col items-center border-2 border-amber-300 rounded-xl w-[600px] p-6 mx-auto shadow-lg">
          <div className="w-full my-4">
            <label className="text-lg font-medium text-gray-700">Title</label>
            <input
              type="text"
              value={title}
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
            <label className="text-lg font-medium text-gray-700">Publish Year</label>
            <input
              type="text"
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
              className="border-2 border-amber-500 p-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600"
            />
          </div>

          <button
            onClick={handleSaveBook}
            className="bg-amber-800 text-white text-lg font-medium px-6 py-2 mt-4 rounded-md hover:bg-amber-700 transition duration-300"
          >
            Save Book
          </button>
        </div>
      )}
    </div>
  );
};

export default CreateBook;
