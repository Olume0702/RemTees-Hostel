import React from 'react';
import backgroundImage from '../assets/hostel-1.jpg';

const Home = () => {
  return (
    <div className="relative overflow-hidden bg-cover bg-no-repeat p-10 text-center h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      >
        <div className="flex h-full items-center justify-center">
          <div className="text-white">
            <h2 className="mb-12 text-5xl md:text-5xl lg:text-7xl  xl:text-7xl 2xl:text-8xl font-semibold">REMTEES HOSTEL</h2>
            
            <h4 className="my-6 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold animate-pulse italic">a place of comfort</h4>
            <a href="#contact">
              <button
                type="button"
                className="animate-bounce rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Call or Visit
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
