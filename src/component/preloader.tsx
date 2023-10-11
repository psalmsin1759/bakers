import React from 'react';

const Preloader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 bg-white">
      <img src="/images/preloader1.gif" alt="Loading" className="w-16 h-16" />
    </div>
  );
};

export default Preloader;
