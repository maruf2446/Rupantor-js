import React from 'react';
import Image from '../assets/img/house-banner.png'
import Search from '../components/Search'

const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0'>
          <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
            <span className='text-violet-700'>Rupantor</span> Design & construction
          </h1>
          <p className='max-w-[480px] mb-8'>
            Real estate is property consisting of land and the buildings on it, along with its natural resources such as growing crops (eg. timber), minerals or water, and wild animals; immovable property of this nature; an interest vested in this (also) an item of real property, (more generally) buildings or housing in general.
          </p>
        </div>
        {/* img */}
        <div className='hidden flex-1 lg:flex justify-end items-end'>
          <img src={Image} alt='' />
        </div>
      </div>
      <Search></Search>
    </section>
  );
};

export default Banner;
