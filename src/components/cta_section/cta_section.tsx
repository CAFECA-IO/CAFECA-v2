import React from 'react';

const CtaSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center px-16 py-20 w-full font-bold leading-[110%] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1120px] max-md:max-w-full">
          <div className="flex flex-col items-center justify-center p-10 max-md:px-5 max-md:max-w-full">
            <div className="self-stretch text-5xl text-gray900 max-md:max-w-full max-md:text-4xl text-center">
              The Next-Generation ID Card - CAFECA
            </div>
            <div className="mt-4 text-xl font-semibold text-gray-500 max-md:max-w-full">
              Redefining Identity: Empowering You as the Sole Owner of Your Identity
            </div>
            <div className="flex gap-2 justify-center px-14 py-5 mt-4 text-lg leading-6 text-primaryPurple rounded-xl max-md:px-5">
              <div>Apply Now</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/90673a637184de7b06df2e298de3f3797ca387b3236bf1ac0f7c82de5749ca4f?apiKey=0e17b0b875f041659e186639705112b1&"
                className="shrink-0 self-start w-6 aspect-square"
              />
            </div>
          </div>
          <div className="w-full flex justify-center relative overflow-x-hidden">
            {/* <div className=""> */}
            {/* <div className="relative mr-30rem"> */}
            {/* Info: 白卡 (20240327 - Shirley) */}
            <div className="absolute top-0 lg:left-1/10 shrink-0">
              <img
                loading="lazy"
                src="/elements/card_white.png"
                className="mt-6 w-full aspect-[4/3]" // w-1/2 lg:
              />
            </div>

            {/* Info: 黑卡 (20240327 - Shirley) */}
            <div className="relative ml-10 lg:ml-1/2 shrink-0">
              {' '}
              <img
                loading="lazy"
                src="/elements/card_black.png"
                className="mt-6 w-full aspect-[4/3]"
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
