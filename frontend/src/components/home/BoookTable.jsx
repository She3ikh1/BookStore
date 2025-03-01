import React from 'react'
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
const BoookTable = ({books}) => {
  return (
    <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="border border-gray-300 px-4 py-2">No</th>
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2 max-md:hidden">Author</th>
                <th className="border border-gray-300 px-4 py-2 max-md:hidden">Publish Year</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book._id} className="text-center hover:bg-gray-100 transition duration-150">
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{book.title}</td>
                  <td className="border border-gray-300 px-4 py-2 max-md:hidden">{book.author}</td>
                  <td className="border border-gray-300 px-4 py-2 max-md:hidden">{book.publishYear}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex justify-center space-x-3">
                    <Link to={`api/book/book-by-id/${book._id}`} className="text-yellow-600 hover:text-yellow-800 transition duration-200">
                    <BsInfoCircle className="text-2xl" />
                      </Link>
                      <Link to={`/api/book/update-by-id/${book._id}`} className="text-green-600 hover:text-green-800 transition duration-200">
                        <AiOutlineEdit className="text-2xl" />
                      </Link>
                      <Link to={`/api/book/delete-by-id/${book._id}`} className="text-red-600 hover:text-red-800 transition duration-200">
                        <MdOutlineDelete className="text-2xl" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
  )
}

export default BoookTable