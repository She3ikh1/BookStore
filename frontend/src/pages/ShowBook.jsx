import React from 'react'
import BackButton from '../components/BackButton'
import { Spinner } from '@phosphor-icons/react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const ShowBook = () => {
  const [book, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id}=useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/api/book/book-by-id/${id}`)
      .then((response) => {
        console.log("API Response:", response.data);
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);
  
  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Show Book</h1>
      {loading?(<Spinner/>):(
        <div className="flex flex-col border-2 border-amber-300 rounded-xl w-fit p-4">
          <div className='my-4'>
            <span className='text-xl mr-4 text-amber-600'>Id</span>
            <span>{book._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-amber-600'>Title</span>
            <span>{book.title}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-amber-600'>Author</span>
            <span>{book.author}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-amber-600'>Publish Year</span>
            <span>{book.publishYear}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-amber-600'>Create time</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-amber-600'>Last Created</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowBook