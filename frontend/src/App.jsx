import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import DeleteBook from "./pages/DeleteBook.jsx";
import EditBook from "./pages/EditBook.jsx";
import ShowBook from "./pages/ShowBook.jsx";
import CreateBook from "./pages/CreateBook.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/api/book/add" element={<CreateBook/>} />
      <Route path="/api/book/book-by-id/:id" element={<ShowBook/>} />
      <Route path="/api/book/update-by-id/:id" element={<EditBook/>} />
      <Route path="/api/book/delete-by-id/:id" element={<DeleteBook/>} />
    </Routes>
  );
};

export default App;
