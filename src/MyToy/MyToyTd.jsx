import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';


const MyToyTd = ({ toy, handleDelete }) => {
    const { sellerName, name, subCategory, price, availableQuantity, email , _id , rating,description, imgUrl} = toy;
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    
   
    return (

        <tr data-aos="fade-left">
            <th>{sellerName}</th>
            <td>{name}</td>
            <td>{subCategory}</td>
            <td>$ {price}</td> 
            <td>{availableQuantity}</td>
            <td><Link to={`/viewDetails/${_id}`}><button className="btn btn-outline">View</button></Link></td>
            <td><button onClick={()=> handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            </button></td>
            <Link to={`/updateToy/${_id}`}><td><button className="btn">Update</button></td></Link>
        </tr>

    );
};

export default MyToyTd;