import React from 'react';

const CarouselSection = () => {
  return (
    <div>
      <div className="flex justify-center items-center px-16 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1120px] max-md:max-w-full">
          <div className="flex flex-col p-10 text-center max-md:px-5 max-md:max-w-full">
            <div className="text-6xl font-bold text-gray900 leading-[61.6px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
              Personalized <span className="text-primaryPurple">Stylish</span> Card{' '}
            </div>
            <div className="self-center mt-4 text-xl font-semibold leading-6 text-gray-500 w-[674px] max-md:max-w-full">
              Various options for your card. Make your card stand out and showcase your personal
              style and taste. No more embarrassing portrait.
            </div>
          </div>
          <div className="flex overflow-hidden relative flex-col justify-center self-center mt-6 w-full max-w-screen-lg min-h-[600px] max-md:max-w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/848b034ea29143a602b40bc269696e1dcbbea340af8138fbf886a9a31228078e?apiKey=0e17b0b875f041659e186639705112b1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/848b034ea29143a602b40bc269696e1dcbbea340af8138fbf886a9a31228078e?apiKey=0e17b0b875f041659e186639705112b1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/848b034ea29143a602b40bc269696e1dcbbea340af8138fbf886a9a31228078e?apiKey=0e17b0b875f041659e186639705112b1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/848b034ea29143a602b40bc269696e1dcbbea340af8138fbf886a9a31228078e?apiKey=0e17b0b875f041659e186639705112b1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/848b034ea29143a602b40bc269696e1dcbbea340af8138fbf886a9a31228078e?apiKey=0e17b0b875f041659e186639705112b1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/848b034ea29143a602b40bc269696e1dcbbea340af8138fbf886a9a31228078e?apiKey=0e17b0b875f041659e186639705112b1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/848b034ea29143a602b40bc269696e1dcbbea340af8138fbf886a9a31228078e?apiKey=0e17b0b875f041659e186639705112b1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/848b034ea29143a602b40bc269696e1dcbbea340af8138fbf886a9a31228078e?apiKey=0e17b0b875f041659e186639705112b1&"
              className="object-cover absolute inset-0 size-full"
            />

            {/* <div className="flex relative flex-col justify-center max-md:max-w-full">
              <div className="flex overflow-hidden relative flex-col items-center px-16 pt-20 w-full min-h-[600px] max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c05194aaab970443f8af8fff060657cf2c5448299e897f68fae8beb716f8ddb9?apiKey=0e17b0b875f041659e186639705112b1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c05194aaab970443f8af8fff060657cf2c5448299e897f68fae8beb716f8ddb9?apiKey=0e17b0b875f041659e186639705112b1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c05194aaab970443f8af8fff060657cf2c5448299e897f68fae8beb716f8ddb9?apiKey=0e17b0b875f041659e186639705112b1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c05194aaab970443f8af8fff060657cf2c5448299e897f68fae8beb716f8ddb9?apiKey=0e17b0b875f041659e186639705112b1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c05194aaab970443f8af8fff060657cf2c5448299e897f68fae8beb716f8ddb9?apiKey=0e17b0b875f041659e186639705112b1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c05194aaab970443f8af8fff060657cf2c5448299e897f68fae8beb716f8ddb9?apiKey=0e17b0b875f041659e186639705112b1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c05194aaab970443f8af8fff060657cf2c5448299e897f68fae8beb716f8ddb9?apiKey=0e17b0b875f041659e186639705112b1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c05194aaab970443f8af8fff060657cf2c5448299e897f68fae8beb716f8ddb9?apiKey=0e17b0b875f041659e186639705112b1&"
                  className="object-cover absolute inset-0 size-full"
                />
                <div className="flex relative gap-4 justify-center px-20 py-6 mt-96 max-md:px-5 max-md:mt-10">
                  <div className="shrink-0 bg-primaryPurple rounded-full h-[15px] w-[15px]" />
                  <div className="shrink-0 bg-gray-200 rounded-full h-[15px] w-[15px]" />
                  <div className="shrink-0 bg-gray-200 rounded-full h-[15px] w-[15px]" />
                  <div className="shrink-0 bg-gray-200 rounded-full h-[15px] w-[15px]" />
                  <div className="shrink-0 bg-gray-200 rounded-full h-[15px] w-[15px]" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
