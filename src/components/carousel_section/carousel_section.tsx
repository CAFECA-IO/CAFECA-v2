import React from 'react';
import Carousel from '../carousel/carousel';
import Image from 'next/image';

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
        <div className="flex flex-col w-full justify-center">
          <div className="flex flex-col p-10 text-center max-md:px-5 max-md:max-w-full">
            <div className="text-6xl font-bold text-gray900 leading-[61.6px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
              Personalized <span className="text-primaryPurple">Stylish</span> Card{' '}
            </div>
            <div className="self-center mt-4 text-xl font-semibold leading-6 text-gray-500 w-[674px] max-md:max-w-full">
              Various options for your card. Make your card stand out and showcase your personal
              style and taste. No more embarrassing portrait.
            </div>
          </div>
          <div className="w-300px md:w-600px lg:w-[800px] mx-auto">
            {' '}
            <Carousel autoSlide>
              {slides1.map((slide, i) => (
                <img key={i} src={slide} alt={`slide-${i}`} />
                // Info: 使用 <Image> 會遇到實際上在手機瀏覽時，全部圖片擠在一個 slide 的問題，因此改用 <img> (20240329 - Shirley)
                // <div
                //   key={i}
                //   className="relative w-300px md:w-600px lg:w-800px aspect-[10/3]"
                //   style={{paddingBottom: '56.25%'}}
                // >
                //   <Image
                //     src={slide}
                //     alt={`slide-${i}`}
                //     fill
                //     style={{objectFit: 'cover', objectPosition: 'center'}}
                //   />
                // </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselSection;
