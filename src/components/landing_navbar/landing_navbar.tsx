/* eslint-disable tailwindcss/no-arbitrary-value */
import React from 'react';

const LandingNavbar = () => {
  return (
    <div>
      <div className="flex gap-5 justify-between px-20 py-4 w-full text-lg font-bold leading-6 text-gray-500 bg-gray100 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ca1b7d504f5034aa6c0db2e3c0c99d2fb8f83ced88499c057df393734137e4?apiKey=0e17b0b875f041659e186639705112b1&"
          className="shrink-0 my-auto max-w-full aspect-[3.33] w-[120px]"
        />
        <div className="flex gap-0 max-md:flex-wrap">
          <div className="justify-center px-9 py-5 whitespace-nowrap rounded-xl max-md:px-5">
            Apply
          </div>
          <div className="justify-center px-9 py-5 rounded-xl max-md:px-5">My Order</div>
          <div className="px-9 py-5 whitespace-nowrap rounded-xl max-md:px-5 justify-center">
            FAQ
          </div>
          <div className="justify-center px-9 py-5 rounded-xl max-md:px-5">Contact Us</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f5663ae0161b9ee6feedc8cad881acde56a2c14a708df2de4d4d0d984dc9959?apiKey=0e17b0b875f041659e186639705112b1&"
            className="shrink-0 aspect-square w-[60px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingNavbar;
