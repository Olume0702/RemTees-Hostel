import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Alice Okotete',
    content: 'Remtees is a delightful haven, offering unparalleled comfort and elegance. I had an amazing stay!',
  },
  {
    id: 2,
    name: 'Sumbo Aderomu',
    content: 'I fell in love with the chic decor and welcoming atmosphere. Remtees is a hidden gem!',
  },
  {
    id: 3,
    name: 'Kewe Eyiogbe',
    content: 'The serene ambiance, and warm staff made my stay unforgettable. I\'ll be back!',
  },
];

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState(testimonialsData);

  const getRandomTestimonials = (count) => {
    const shuffled = testimonials.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  return (
    <div id='testimonials' className="py-10 px-4 max-w-xl  mx-auto">
      <h1 className="text-5xl text-center font-bold mb-8">Testimonials</h1>
      <Carousel showArrows={true} showStatus={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
        {getRandomTestimonials(3).map((testimonial) => (
          <div key={testimonial.id} className="p-6 bg-gray-900 shadow-md rounded-lg">
            <p className="text-slate-50 text-lg mb-4">{testimonial.content}</p>
            <p className="text-slate-50 font-medium">{testimonial.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
