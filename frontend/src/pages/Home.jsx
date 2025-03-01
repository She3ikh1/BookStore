import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BookCard  from "../components/home/BookCard";
import BoookTable from "../components/home/BoookTable";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showtype, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/api/book/all-books")
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6">
      {/* Header */}

      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-amber-500 hover:bg-amber-300 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          {" "}
          Table
        </button>
        <button
          className="bg-amber-500 hover:bg-amber-300 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          {" "}
          Card
        </button>
      </div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Books List</h1>
        <Link to="api/book/add">
          <MdOutlineAddBox className="text-sky-600 text-4xl hover:text-sky-800 transition duration-200" />
        </Link>
      </div>

      {/* Table */}
      {loading ? (
        <Spinner />
      ) : showtype === "table" ? (
        <BoookTable books={books} />
      ) : (
        <BookCard books={books} />
      )}
    </div>
  );
};

export default Home;
