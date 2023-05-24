import Aos from 'aos';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Alltoy = ({toy}) => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
    const {sellerName, name, subCategory, price, availableQuantity, _id} = toy;
    return (
        <tr data-aos="fade-right">
        <th>{sellerName}</th>
        <td>{name}</td>
        <td>{subCategory}</td>
        <td>${price}</td>
        <td>{availableQuantity}</td>
        <td><Link to={`/viewDetails/${_id}`}><button className="btn btn-outline">View</button></Link></td>
      </tr>
    );
};

export default Alltoy;