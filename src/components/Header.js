import React from 'react';

import { Link } from 'react-router-dom';
// import logo
// import Logo from '../assets/img/logo.svg'

const Header = () => {
  return <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <Link to='/'>
        {/* <img src={Logo} alt=''/> */}
        <h1 className='text-xl md:text-2xl bg-green-600 text-white px-4 py-2 rounded-lg transition font-bold hover:bg-violet-700'>Rupantor</h1>
        </Link>
        {/* buttons */}
        <div className='flex items-center gap-6'>
          <Link className='hover:text-violet-800 transition' to='/'>Log in</Link>
          <Link className='bg-violet-800 hover:bg-green-600 text-white px-4 py-3 rounded-lg transition' to='/'>Sign up</Link>
        </div>
      </div>
  </header>;
};

export default Header;
