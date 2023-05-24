import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const CustomerSays = () => {
    const testimonials = [
        {
          name: 'Mohammad Rajib',
          quote: "I recently discovered the PopToy Music Toy website and I must say, it's a fantastic platform for music enthusiasts of all ages. The website offers a wide range of interactive and engaging music toys that are both educational and entertaining. Navigating through the website was a delight, thanks to its user-friendly interface and intuitive design. The collection of music toys is impressive, and I found exactly what I was looking for with ease. The website provides detailed information about each toy, including features and specifications, which helped me make informed decisions. I highly recommend the PopToy Music Toy website to anyone seeking a fun and enriching musical experience!",
          image: 'https://i.ibb.co/Qd3hwz5/p2.jpg'
        },
        {
          name: 'Forhan Khan',
          quote: "As a music enthusiast and parent, I was thrilled to discover the PopToy Music Toy website. It's a treasure trove of musical delights! The website offers a vast selection of high-quality music toys that are perfect for nurturing a child's love for music. I was impressed by the website's user-friendly layout and seamless browsing experience. The detailed product descriptions and customer reviews provided valuable insights and helped me choose the perfect music toy for my child. The customer service team was also exceptional, promptly addressing any queries I had. I can confidently say that the PopToy Music Toy website has become my go-to destination for all things musical!",
          image: 'https://scontent.fcgp3-2.fna.fbcdn.net/v/t39.30808-6/322227260_840121670605189_5717747263489164951_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fasBL8fGd3cAX_BNlVk&_nc_ht=scontent.fcgp3-2.fna&oh=00_AfBVdQtxidELjmNYSNMc1gkgbGHgMLYR4udf1g-DDuobmA&oe=646E7D99'
        },
        // Add more testimonials as needed
      ];
    return (
        <div>
            
            <section id="testimonials" className="bg-gradient-to-r from-slate-100 to-slate-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-shadow-lg text-red-400 shadow-offset-x-2 shadow-offset-y-2 shadow-blur-5">What Our Customers Are Saying </h2>
        <p className='text-slate-500 mb-4'>CUSTOMER TESTIMONIALS</p>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex items-center">
              <FaQuoteLeft className="text-2xl text-gray-400 mr-4" />
              <div className="flex-grow">
                <p className="text-gray-800">{testimonial.quote}</p>
                <div className="flex items-center mt-4">
                  <img src={testimonial.image} alt={testimonial.name} className="rounded-full h-10 w-10 mr-4" />
                  <div>
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-gray-500">Customer</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        </div>
    );
};

export default CustomerSays;