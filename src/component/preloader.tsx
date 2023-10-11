import React from 'react';
import Image from 'next/image';

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-white">
      <Image
        src="/images/preloader1.gif"
        alt="Loading"
        className="w-16 h-16"
        width={16}
        height={16}
      />
    </div>
  );
};

export default Preloader;
