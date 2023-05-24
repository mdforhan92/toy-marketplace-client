import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';

const ViewDetails = () => {
    const viewDetails = useLoaderData();
    useTitle('PopToy | ViewDetails');
    const { sellerName, name, subCategory, price, availableQuantity, email, _id, rating, description, imgUrl } = viewDetails;
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <img
                className="mx-auto h-3/4 w-4/5 p-4"
                src={imgUrl}
                alt="Toy"
            />
            <div className="p-6">
                <h2 className="font-semibold text-4xl text-red-700 shadow-xl p-4">{name}</h2>
                <p className="text-gray-600 text-xl mt-8">Seller Name: {sellerName}</p>
                <p className="text-gray-800 text-xl mt-2">Price: ${price}</p>
                <div className="flex items-center mt-2">
                    <p className="text-yellow-500 text-xl">Rating: 
                        <Rating
                            placeholderRating={rating}
                            readonly
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar />}
                        /> {rating}

                        
                    </p>
                    
                </div>
                <p className="text-gray-600 text-xl mt-2">Available Quantity: {availableQuantity}</p>
                <p className="text-gray-600 mt-4">
                    <p className='font-semibold text-xl'>Description:</p>
                    {description}
                </p>
            </div>
        </div>
    );
};

export default ViewDetails;