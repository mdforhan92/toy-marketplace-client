import React, { useEffect, useState } from 'react';
import ShopCategoryCard from '../../ShopCategoryCard.jsx/ShopCategoryCard';
import 'aos/dist/aos.css';
import Aos from 'aos';

const ShopCategory = () => {

    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    const [toys, setToys] = useState([])
    const [activeTab, setActiveTab] = useState("SingingAndDancing");
    // console.log(activeTab)
    
    const url = `https://toy-marketplace-server-alpha.vercel.app/allToysSearch/${activeTab}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [activeTab,url])

    const handleTab = (categoryName) => {
        setActiveTab(categoryName);
    };
    return (
        <div className='py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6'>
            <div className="mx-auto max-w-screen-sm">
                <h2 className="mb-4 text-4xl text-red-500 tracking-tight font-extrabold">
                    Shop by Category
                </h2>
                <p className="text-xl text-gray-400">
                    Explore the whole collection of Toy Music with just a click of a button.
                </p>
            </div>
            {/* tabs */}
            <div className='my-16'>
                <div className="tabs flex justify-center items-center">
                    <div
                        onClick={() => handleTab("MusicMaking")}
                        className={`m-2 px-6 py-2 text-lg rounded font-semibold cursor-pointer transition-all duration-300 text-white ${activeTab == "Muscles" ? " bg-orange-600 text-white" : "bg-orange-500"
                            }`}
                    >
                       Music Making
                    </div>
                    <div
                        onClick={() => handleTab("SingingAndDancing")}
                        className={`m-2 px-6 py-2 text-lg rounded font-semibold cursor-pointer transition-all duration-300 text-white ${activeTab == "Sports" ? " bg-orange-500 text-white" : "bg-orange-500"
                            }`}
                    >
                      Singing & Dancing
                    </div>
                    <div
                        onClick={() => handleTab("MusicBoxes")}
                        className={`m-2 px-6 py-2 text-lg rounded font-semibold cursor-pointer transition-all duration-300 text-white  ${activeTab == "Trucks" ? " bg-orange-500 text-white" : "bg-orange-500"
                            }`}
                    >
                        Music Boxes
                    </div>
                </div>
            </div>
            {/* cards */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12' data-aos="fade-right">
                {
                    toys.map(toy => <ShopCategoryCard
                        key={toy._id}
                        toy={toy}
                    ></ShopCategoryCard>)
                }
            </div>

        </div>
    );
};

export default ShopCategory;