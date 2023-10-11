'use client';
import React, { useState, useEffect } from 'react';
import Preloader from '../component/Preloader';
import FullScreenImage from './fullpageimage';

function page() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a 3-second delay to hide the preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); // Clear the timer if the component unmounts
  }, []);

  return (
    <div>
      <div>{isLoading ? <Preloader /> : <FullScreenImage />} </div>
    </div>
  );
}

export default page;
