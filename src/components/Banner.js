import React from 'react';
import Image  from '../assets/img/house-banner.png';

import Search from '../components/Search'
const Banner = () => {
  return (
    <>
  <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
  <div className='flex flex-col lg:flex-row'>
    <div className='p-4 1g:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 1g:px-0'>
      <h1 className='text-4xl font-bold leading-none mb-6'>
        <span className='text-violet-800'>Rent</span> Your Dream House With Us.
      </h1>
      <p className='mt-4 text-gray-700 max-w-auto mb-8 '>
        Discover a wide range of beautiful houses for rent that cater to all your needs and desires.
      </p>
    </div>
    <div className='p-10 hidden flex-1 lg:flex justify-end items-end'>
      <img src={Image} alt='Dream House' className='rounded-lg'/>
    </div>
  </div>
  <Search/> 
</section>


    </>
  );
};

export default Banner;
