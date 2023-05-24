import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Aos from 'aos';
import banner6 from '../../assets/banner/06.jpg'
import YouTubePlayer from '../../Bonus/YoutubeVideo/YouTubePlayer';


const Banner = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);
    return (
        <div className="carousel w-full h-[600px] mt-4" data-aos="fade-up">

            <div id="slide6" className="carousel-item relative w-full">
                <img src={banner6} className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex h-full left-0 right-0 top-0 bg-gradient-to-r from-red-900 to-[rgba(21, 21, 21, 0)]">
                    <div className='ml-12 text-white space-y-7 w-2/5 my-auto'>
                        <h1 className='text-6xl font-bold'>Rock Out with PopToy's Musical Toys!</h1>
                        <p className='text-4xl'> Get 25% Off Today!</p>
                        <div>
                            <button className="btn btn-primary mr-5">Shop Now</button>
                            <button className="btn btn-outline text-white"><YouTubePlayer></YouTubePlayer></button>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;