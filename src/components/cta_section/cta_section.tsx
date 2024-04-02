import Link from 'next/link';
import {useEffect, useRef, useState} from 'react';
import {CAFECA_URL} from '../../constants/config';
import Image from 'next/image';

const CTASection = () => {
  const animeRef1 = useRef(null);
  const [isAnimeRef1Visible, setIsAnimeRef1Visible] = useState(false);

  useEffect(() => {
    const waitForCTA = setTimeout(() => {
      setIsAnimeRef1Visible(true);
    }, 500);
    return () => {
      clearTimeout(waitForCTA);
    };
  }, []);

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

            <Link
              href={CAFECA_URL.COMING_SOON}
              className="flex gap-2 justify-center px-14 py-5 mt-4 text-lg leading-6 text-primaryPurple group rounded-xl max-md:px-5 hover:opacity-60"
            >
              <div>Apply Now</div>
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.69675 2.93088C6.41554 3.21217 6.25757 3.59363 6.25757 3.99138C6.25757 4.38913 6.41554 4.77059 6.69675 5.05188L14.1217 12.4769L6.69675 19.9019C6.42351 20.1848 6.27232 20.5637 6.27574 20.957C6.27915 21.3503 6.43691 21.7265 6.71502 22.0046C6.99313 22.2827 7.36935 22.4405 7.76265 22.4439C8.15594 22.4473 8.53484 22.2961 8.81775 22.0229L17.3032 13.5374C17.5845 13.2561 17.7424 12.8746 17.7424 12.4769C17.7424 12.0791 17.5845 11.6977 17.3032 11.4164L8.81775 2.93088C8.53646 2.64967 8.15499 2.4917 7.75725 2.4917C7.3595 2.4917 6.97804 2.64967 6.69675 2.93088Z"
                  fill="#B531FD"
                />
              </svg>
            </Link>
          </div>
          <div
            className="w-full flex justify-center relative overflow-x-hidden h-fit md:h-500px"
            ref={animeRef1}
          >
            {/* Info: 白卡 (20240327 - Shirley) */}
            <div
              className={`relative top-0 left-20 sm:left-4rem shrink-0 ${isAnimeRef1Visible ? `translate-x-0` : `translate-x-10% sm:translate-x-20% md:translate-x-15% lg:translate-x-20%`} duration-1000`}
            >
              {/* Deprecated: <img> layout (20240414 - Shirley) */}
              {/* <img
                loading="lazy"
                src="/elements/card_white.png"
                className="mt-6 max-w-[300px] md:max-w-4/5 mx-auto aspect-[4/3]"
              /> */}
              <div className="aspect-[4/3] w-250px sm:w-300px md:w-400px lg:w-500px">
                <Image
                  src="/elements/card_white.png"
                  alt="White Card"
                  fill
                  style={{objectFit: 'contain'}}
                />
              </div>
            </div>

            {/* Info: 黑卡 (20240327 - Shirley) */}
            <div
              className={`relative shrink-0 top-0 right-14 sm:right-0 ${isAnimeRef1Visible ? `translate-x-0` : `-translate-x-10% sm:-translate-x-20% md:-translate-x-15% lg:-translate-x-20%`} duration-1000`}
            >
              {' '}
              {/* Deprecated: <img> layout (20240414 - Shirley) */}
              {/* <img
                loading="lazy"
                src="/elements/card_black.png"
                className="mt-6 max-w-[300px] md:max-w-4/5 mx-auto  aspect-[4/3]"
              /> */}
              <div className="aspect-[4/3] w-250px sm:w-300px md:w-400px lg:w-500px">
                <Image
                  src="/elements/card_black.png"
                  alt="Black Card"
                  fill
                  style={{objectFit: 'contain'}}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
