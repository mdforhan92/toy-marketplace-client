import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useTitle from '../Hooks/useTitle';

const AddToy = () => {
    const {user} = useContext(AuthContext);
    useTitle('PopToy | AddToy')

    const handleToAddToy = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const imgUrl = form.imgUrl.value;
        const sellerName = form.sellerName.value;
        const rating = form.rating.value;
        const email = user?.email;
        const subCategory = form.subCategory.value;
        const price = form.price.value;
        const availableQuantity = form.availableQuantity.value;
        const description = form.description.value;
        const addToy = {
            name,
            imgUrl,
            sellerName,
            rating,
            email,
            subCategory,
            price,
            availableQuantity, 
            description
        }
        console.log(addToy);

        // make a post request to add toy
        fetch('https://toy-marketplace-server-alpha.vercel.app/allToys',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addToy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // form.reset();
            if(data.insertedId){
                Swal.fire({
                    icon: 'success',
                    title: 'Added Successfully',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
        }
        )
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 mt-4 text-center">Add Toy</h1>
            <div className="max-w-md mx-auto">
      <form onSubmit={handleToAddToy} className="bg-white p-6 rounded-lg shadow-md">
        {/* <h2 className="text-xl font-semibold mb-4">Add Product</h2> */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
           Toy Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg"
            placeholder="Enter Toy name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="imgUrl" className="block text-gray-700 font-medium mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg"
            placeholder="Enter image URL"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="sellerName" className="block text-gray-700 font-medium mb-2">
            Seller Name
          </label>
          <input
            type="text"
            id="sellerName"
            name="sellerName"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg"
            placeholder="Enter seller name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700 font-medium mb-2">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg"
            placeholder="Toy rating"
            min="1"
            max="5"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg"
            placeholder="Enter email"
            defaultValue={user?.email}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="subCategory" className="block text-gray-700 font-medium mb-2">
            Sub Category
          </label>
          <select
            id="subCategory"
            name="subCategory"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg"
          >
            <option value="">Select sub category</option>
            <option value="MusicMaking">Music-Making Toys </option>
            <option value="SingingAndDancing">Singing and Dancing Toys</option>
            <option value="MusicBoxes">Music Boxes</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg"
            placeholder="Amount in $"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="availableQuantity" className="block text-gray-700 font-medium mb-2">
            Available Quantity
          </label>
          <input
            type="number"
            id="availableQuantity"
            name="availableQuantity"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg"
            placeholder="Enter available quantity"
            min="0"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="w-full border border-gray-300 px-3 py-2 rounded-lg"
            placeholder="Enter product description"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>

        </div>
    );
};

export default AddToy;