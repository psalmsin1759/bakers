'use client';
import { useState } from 'react';
import * as React from 'react';
import ReactFlagsSelect from 'react-flags-select';
import Image from 'next/image';

const FullScreenImage = () => {
  const [selected, setSelected] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const handleGoButtonClick = () => {
    if (selected && selectedLanguage) {
      // Define the URLs for different regions
      const nigeriaURL = 'https://nigeria.bakersluxury.com';
      const europeanCountriesURL = 'https://euro.bakersluxury.com';
      const northAmericaCountriesURL = 'https://us.bakersluxury.com';

      switch (selected) {
        case 'NG': // Nigeria
          window.location.href = nigeriaURL;
          break;
        case 'GB':
        case 'FR':
        case 'PT':
        case 'ES':
          // European countries
          window.location.href = europeanCountriesURL;
          break;
        case 'US':
        case 'CA':
          // North America countries
          window.location.href = northAmericaCountriesURL;
          break;
        default:
          // Handle other cases or provide a default action
          break;
      }
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div
        id="controls-carousel"
        className="absolute w-full h-full"
        data-carousel="static"
      >
        {/*  <img
          src="/images/bg1.png"
          alt="Background Image"
          className="w-full h-full object-cover"
        /> */}

        <Image src="/images/bg1.png" alt="background image" layout="fill" />

        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      <div className="absolute top-0 left-0 m-4 z-10">
        {/*  <img src="/images/header-logo.png" alt="Logo" className="w-400 h-108" /> */}
        <Image
          src="/images/header-logo.png"
          alt="background image"
          width={400}
          height={108}
        />
      </div>

      <div className="absolute mt-8 left-10 top-1/2 flex flex-col items-left justify-center z-10 w-[250px]">
        <ReactFlagsSelect
          className="bg-white text-black  rounded "
          searchable
          selected={selected}
          onSelect={(code) => setSelected(code)}
        />

        <ReactFlagsSelect
          className="bg-white text-black  rounded mt-2 pb-4 "
          selected={selectedLanguage}
          onSelect={(code) => setSelectedLanguage(code)}
          countries={['GB', 'FR', 'PT', 'ES']}
          customLabels={{
            GB: 'English',
            FR: 'French',
            PL: 'Portuguese',
            SP: 'Spanish',
          }}
          placeholder="Select Language"
        />

        <button
          onClick={handleGoButtonClick}
          className="p-2 mt-2 bg-black text-white rounded-md"
        >
          Go
        </button>
      </div>
    </div>
  );
};

export default FullScreenImage;
