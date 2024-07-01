import React from 'react';
import Logo from '../assets/img/logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header className='py-9 mb-1 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link to='/'>
          <img src={Logo} alt='logo' />
        </Link>

      {/* Buttons */}
        <div className='flex items-center gap-6'>

          <Link className='hover:text-violet-900 transition' to='/login'>Log in</Link>
          <Link className='bg-violet-700 hover:bg-violet-900 text-white px-4 py-3 rounded-lg transition' to='/signup'>Sign up</Link>

        </div>
      </div>
    </header>
    </>
  );
};

export default Header;
