import React from 'react';
import Carousel from '../carousel/carousel';

const CarouselSection = () => {
  const slides1 = [
    '/carousel/products_1.png',
    '/carousel/products_2.png',
    '/carousel/products_3.png',
    '/carousel/products_4.png',
    '/carousel/products_5.png',
  ];

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
          <div className="max-w-[1000px] mx-auto">
            {' '}
            <Carousel autoSlide>
              {slides1.map((slide, i) => (
                <img key={i} src={slide} alt={`slide-${i}`} />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;

{
  /* <div className="absolute -top-20 h-220px w-220px">
          <Image
            src={image}
            alt={alt}
            fill
            style={{objectFit: 'cover', objectPosition: 'center bottom'}}
          />
        </div> */
}
