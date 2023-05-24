import React, { useEffect, useState } from 'react';
import Alltoy from './Alltoy';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const AllToys = () => {
  useTitle('PopToy | AllToys');
  const [toys, setToys] = useState([]);
  const [searchText, setSearchText] = useState('');
  const { totalToys } = useLoaderData();
  const itemsPerPage = 20; //TODO: make this dynamic
  const totalPages = Math.ceil(totalToys / itemsPerPage);

  const pageNumbers = [...Array(totalPages).keys()];


  console.log(totalToys);

  useEffect(() => {
    fetch('https://toy-marketplace-server-alpha.vercel.app/allToys')
      .then(res => res.json())
      .then(data => setToys(data))
  }, [])

  
  const handleSearch = (e) => {
    fetch(`https://toy-marketplace-server-alpha.vercel.app/allToysSearch/${searchText}`)
    .then(res => res.json())
    .then(data => setToys(data))
  };


  

  return (
    <>
      <div>
        <h2 className='text-center font-semibold mb-4'>All Toy: {toys.length}</h2>

        <div className="flex justify-center items-center mb-4">
          <input onChange={(e) => setSearchText(e.target.value)} type='text' placeholder="Search Toy Name" className='input input-bordered w-full max-w-xs mr-4' />{" "}
          <button className='btn btn-outline' onClick={handleSearch}>Search</button>
        </div>
      

        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                toys.map(toy => <Alltoy
                  key={toy._id}
                  toy={toy}
                ></Alltoy>)
              }
            </tbody>
          </table>
        </div>

      </div>
      {/* // pagination */}
      <div className="flex justify-center items-center mt-4">
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination"> 
          {/* previous */}
          <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Previous</span>
            {/* Heroicon name: solid/chevron-left */}
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
              aria-hidden="true">
              <path fillRule="evenodd"
                d="M9.707 5.293a1 1 0 010 1.414L7.414 10l2.293 2.293a1 1 0
                  11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1
                  0 011.414 0z"
                  clipRule="evenodd" />
            </svg>
          </a>
          {/* page number */}
          {
            pageNumbers.map(number => <a href="#" key={number} className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">{number + 1}</a>)
          }
          {/* next */}
          <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Next</span>
            {/* Heroicon name: solid/chevron-right */}
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
              fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd"
                d="M10.293 14.707a1 1 0
                  010-1.414L12.586 10 10.293 7.707a1 1 0
                  011.414-1.414l3 3a1 1 0 010 1.414l-3
                  3a1 1 0 01-1.414 0z"
                  clipRule="evenodd" />
            </svg>
          </a>
        </nav>
      </div>

    </>
  );
};

export default AllToys;