import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className="flex justify-center">
      <div className="mx-12">
        <Image
          src={'/logo.webp'}
          width={120}
          height={50}
          alt="Ortho logo"
          priority={true}
        />
      </div>
    </nav>
  );
};

export default Header;
