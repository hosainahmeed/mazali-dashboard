import React from 'react';
import brandImage from '../../assets/logo.svg';

function Logo() {
  return (
    <div className='flex items-center w-full'>
      <img className='h-8'src={brandImage} alt="Mazali_brand_logo" />
    </div>
  );
}

export default Logo;
