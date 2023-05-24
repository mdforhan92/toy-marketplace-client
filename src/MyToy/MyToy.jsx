import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import MyToyTd from './MyToyTd';
import Swal from 'sweetalert2';
import useTitle from '../Hooks/useTitle';

const MyToy = () => {
    useTitle('PopToy | MyToy');
    // make useState for my toys
    const [toys, setToys] = useState([]);
    const {user} = useContext(AuthContext);
    console.log(user?.email)
    useEffect(()=>{
        fetch(`https://toy-marketplace-server-alpha.vercel.app/myToys/${user?.email}`)   
        .then(res => res.json())
        .then(data => setToys(data))
        .catch(error => console.log(error))
    },[user?.email]);

    //delete
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://toy-marketplace-server-alpha.vercel.app/allToys/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            // loading nam kore auto delete
                            const remaining = toys.filter(toy => toy._id !== _id);
                            setToys(remaining);
                        }
                    })
            }
        })
    }
    return (
        <div>
            <h2 className='text-center font-semibold mb-4'>My Toy: {toys.length}</h2>
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
        <th>Remove</th>
        <th>Update</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        toys.map(toy => <MyToyTd
        key={toy._id}
        toy={toy}
        handleDelete={handleDelete}
        ></MyToyTd>)
      }
    </tbody>
  </table>
</div>

        </div>
    );
};

export default MyToy;