import React from 'react';
import b1 from '../../../assets/babyAge/b1.jpg'
import b2 from '../../../assets/babyAge/b2.webp'
import b3 from '../../../assets/babyAge/b3.webp'
import b4 from '../../../assets/babyAge/b4.webp'
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

const ShopByAge = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    return (
        <div className='mx-auto mt-4' data-aos="fade-left">
            <h1 className=' text-4xl text-red-500 tracking-tight font-extrabold text-center'>Shop By Age</h1>
            <p className='text-red-400 text-center mb-4'>Our Collection</p>
            <div className='grid grid-cols-4'>
                <div className="max-w-sm rounded overflow-hidden mx-auto">
                    <img className="w-40 h-40 rounded-full" src={b1} alt="Placeholder Image" />
                    <div className="">
                        <div className="font-bold text-xl mt-4 text-center text-slate-700">Baby</div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden mx-auto">
                    <img className="w-40 h-40 rounded-full" src={b3} alt="Placeholder Image" />
                    <div className="">
                        <div className="font-bold text-xl mt-4 text-center text-slate-700">4 to 8 years</div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden mx-auto">
                    <img className="w-40 h-40 rounded-full" src={b2} alt="Placeholder Image" />
                    <div className="">
                        <div className="font-bold text-xl mt-4 text-center text-slate-700">8 to 11 years</div>
                    </div>
                </div>
                <div className="max-w-sm rounded overflow-hidden mx-auto">
                    <img className="w-40 h-40 rounded-full" src={b4} alt="Placeholder Image" />
                    <div className="">
                        <div className="font-bold text-xl mt-4 text-center text-slate-700">12 years & Up</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByAge;