import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

const Gallery2 = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
    const images = [
        {
          original: 'https://i.ibb.co/Q9kwGVn/11.jpg',
          thumbnail: 'https://i.ibb.co/Q9kwGVn/11.jpg',
          description: '',
        },
        {
          original: 'https://i.ibb.co/Qkrm3Jk/12.jpg',
          thumbnail: 'https://i.ibb.co/Qkrm3Jk/12.jpg',
          description: '',
        },
        {
          original: 'https://i.ibb.co/d47gZkc/13.jpg',
          thumbnail: 'https://i.ibb.co/d47gZkc/13.jpg',
          description: '',
        },
        {
          original: 'https://i.ibb.co/XF4KQHh/14.jpg',
          thumbnail: 'https://i.ibb.co/XF4KQHh/14.jpg',
          description: '',
        },
        {
          original: 'https://i.ibb.co/JFrq79r/15.jpg',
          thumbnail: 'https://i.ibb.co/JFrq79r/15.jpg',
          description: '',
        },
        {
          original: 'https://i.ibb.co/znH4vJx/16.jpg',
          thumbnail: 'https://i.ibb.co/znH4vJx/16.jpg',
          description: '',
        },
        {
          original: 'https://i.ibb.co/89t3pkW/17.jpg',
          thumbnail: 'https://i.ibb.co/89t3pkW/17.jpg',
          description: '',
        },
        {
          original: 'https://i.ibb.co/Yph4pd3/18.jpg',
          thumbnail: 'https://i.ibb.co/Yph4pd3/18.jpg',
          description: '',
        },
        // Add more images as needed
      ];
    return (
        <div>
            <h1 className='mb-4 text-4xl text-red-500 tracking-tight font-extrabold mt-4 text-center'>Gallery</h1>
            <div className='w-4/5 mx-auto' data-aos="fade-up">
            <ImageGallery items={images} />
        </div>
        </div>
    );
};

export default Gallery2;