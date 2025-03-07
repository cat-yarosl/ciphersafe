import React from 'react';

interface HeaderProps {
  text: string;
  subText: string;
  imgSrc?: string;
}

const Header: React.FC<HeaderProps> = ({ text, subText, imgSrc }) => {
  return (
    <header className='
      flex
      flex-row
      text-start 
      p-2 
      bg-gray-300 
      rounded-lg
    '>
      <img 
        src={imgSrc}
        alt='CipherSafe Logo' 
        className='
          w-30 
          h-30 
      '/>
      <div className='
        flex
        flex-col
      '>
        <h1 className='
          text-4xl 
          font-bold 
          mb-2
          mt-4
          ml-4
        '>
          {text}
        </h1>
        <p className='
          text-lg 
          text-gray-600
          ml-4
        '>
          {subText}
        </p>
      </div>
    </header>
  );
};

export default Header;