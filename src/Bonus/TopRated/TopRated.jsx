import React, { useEffect } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import 'aos/dist/aos.css';
import Aos from 'aos';

const TopRated = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    return (
        <div className='mt-16 mb-4'>
            <h1 className='text-4xl text-red-500 tracking-tight font-extrabold text-center '>Top Rated Musical Toys</h1>
            <p className='text-red-400 text-center mb-8'>OUR BEST TOYS</p>
            <div className='grid md:grid-cols-2 gap-4'>
                <div>
                    <div className='grid grid-cols-2 gap-4' data-aos="fade-up">
                        <div>

                            <div>
                                {/* /1  */}
                                <div className="card card-side mb-4">
                                    <figure><img className='h-20 w-20 p-2' src="https://i.ibb.co/kGVz04j/a2.webp" alt="Movie" /></figure>
                                    <div className="ml-4">
                                        <h4 className="card-title text-slate-700">Djeco Animambo</h4>
                                        <p className='text-orange-400'><Rating
                                            placeholderRating={5}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                        /></p>
                                        <p className='text-blue-700 text-xl'>$79.00 USD</p>
                                    </div>
                                </div>

                                <div className="card card-side mb-4">
                                    <figure><img className='h-20 w-20 p-2' src="https://i.ibb.co/wg3pDFt/a3.jpg" alt="Movie" /></figure>
                                    <div className="ml-4">
                                        <h4 className="card-title text-slate-700">Wooden Hand Knock</h4>
                                        <p className='text-orange-400'><Rating
                                            placeholderRating={5}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                        /></p>
                                        <p className='text-blue-700 text-xl'>$35.00 USD</p>
                                    </div>
                                </div>
                                <div className="card card-side mb-4">
                                    <figure><img className='h-20 w-20 p-2' src="https://i.ibb.co/ZK0Wh1h/a4.jpg" alt="Movie" /></figure>
                                    <div className="ml-4">
                                        <h4 className="card-title text-slate-700">Maxcozy Musical Wind</h4>
                                        <p className='text-orange-400'><Rating
                                            placeholderRating={5}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                        /></p>
                                        <p className='text-blue-700 text-xl'>$79.00 USD</p>
                                    </div>
                                </div>
                                <div className="card card-side mb-4">
                                    <figure><img className='h-20 w-20 p-2' src="https://i.ibb.co/hMcbvSt/a5.webp" alt="Movie" /></figure>
                                    <div className="ml-4">
                                        <h4 className="card-title text-slate-700">Sweet Plastic Piano</h4>
                                        <p className='text-orange-400'><Rating
                                            placeholderRating={5}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                        /></p>
                                        <p className='text-blue-700 text-xl'>$79.00 USD</p>
                                    </div>
                                </div>
                                <div className="card card-side mb-4">
                                    <figure><img className='h-20 w-20 p-2' src="https://i.ibb.co/b52xrRY/a6.jpg" alt="Movie" /></figure>
                                    <div className="ml-4">
                                        <h4 className="card-title text-slate-700">Musical Toy Reig Rattle</h4>
                                        <p className='text-orange-400'><Rating
                                            placeholderRating={5}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                        /></p>
                                        <p className='text-blue-700 text-xl'>$79.00 USD</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div>


                            <div>
                                {/* /1  */}
                                <div className="card card-side mb-4">
                                    <figure><img className='h-20 w-20 p-2' src="https://i.ibb.co/kGVz04j/a2.webp" alt="Movie" /></figure>
                                    <div className="ml-4">
                                        <h4 className="card-title text-slate-700">Djeco Animambo</h4>
                                        <p className='text-orange-400'><Rating
                                            placeholderRating={5}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                        /></p>
                                        <p className='text-blue-700 text-xl'>$79.00 USD</p>
                                    </div>
                                </div>

                                <div className="card card-side mb-4">
                                    <figure><img className='h-20 w-20 p-2' src="https://i.ibb.co/wg3pDFt/a3.jpg" alt="Movie" /></figure>
                                    <div className="ml-4">
                                        <h4 className="card-title text-slate-700">Wooden Hand Knock</h4>
                                        <p className='text-orange-400'><Rating
                                            placeholderRating={5}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                        /></p>
                                        <p className='text-blue-700 text-xl'>$35.00 USD</p>
                                    </div>
                                </div>
                                <div className="card card-side mb-4">
                                    <figure><img className='h-20 w-20 p-2' src="https://i.ibb.co/ZK0Wh1h/a4.jpg" alt="Movie" /></figure>
                                    <div className="ml-4">
                                        <h4 className="card-title text-slate-700">Maxcozy Musical Wind</h4>
                                        <p className='text-orange-400'><Rating
                                            placeholderRating={5}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                        /></p>
                                        <p className='text-blue-700 text-xl'>$79.00 USD</p>
                                    </div>
                                </div>
                                <div className="card card-side mb-4">
                                    <figure><img className='h-20 w-20 p-2' src="https://i.ibb.co/hMcbvSt/a5.webp" alt="Movie" /></figure>
                                    <div className="ml-4">
                                        <h4 className="card-title text-slate-700">Sweet Plastic Piano</h4>
                                        <p className='text-orange-400'><Rating
                                            placeholderRating={5}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                        /></p>
                                        <p className='text-blue-700 text-xl'>$79.00 USD</p>
                                    </div>
                                </div>
                                <div className="card card-side mb-4">
                                    <figure><img className='h-20 w-20 p-2' src="https://i.ibb.co/b52xrRY/a6.jpg" alt="Movie" /></figure>
                                    <div className="ml-4">
                                        <h4 className="card-title text-slate-700">Musical Toy Reig Rattle</h4>
                                        <p className='text-orange-400'><Rating
                                            placeholderRating={5}
                                            readonly
                                            emptySymbol={<FaRegStar />}
                                            placeholderSymbol={<FaStar />}
                                            fullSymbol={<FaStar />}
                                        /></p>
                                        <p className='text-blue-700 text-xl'>$79.00 USD</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down">

                    <div className="relative bg-cover bg-center bg-gray-900 text-white py-36" style={{ backgroundImage: 'url("https://i.ibb.co/fqMF4fh/155389-OV6-LHO-812.jpg")' }}>
                        <div className="max-w-4xl mx-auto px-4">
                            <h1 className="text-4xl md:text-6xl font-bold mb-4 underline">SUMMER SALE</h1>
                            <p className="text-lg md:text-xl mb-8">Up to 10% off only for all new customers</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TopRated;