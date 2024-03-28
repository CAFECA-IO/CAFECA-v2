import {useEffect, useRef, useState} from 'react';

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
            <div className="flex gap-2 justify-center px-14 py-5 mt-4 text-lg leading-6 text-primaryPurple rounded-xl max-md:px-5">
              <div>Apply Now</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/90673a637184de7b06df2e298de3f3797ca387b3236bf1ac0f7c82de5749ca4f?apiKey=0e17b0b875f041659e186639705112b1&"
                className="shrink-0 self-start w-6 aspect-square"
              />
            </div>
          </div>
          <div className="w-full flex justify-center relative overflow-x-hidden" ref={animeRef1}>
            {/* <div className=""> */}
            {/* <div className="relative mr-30rem"> */}
            {/* Info: 白卡 (20240327 - Shirley) */}
            <div
              className={`absolute -top-2 lg:left-1/11 xl:left-1/8 md:-left-5 shrink-0 ${isAnimeRef1Visible ? `translate-x-0` : `translate-x-10% md:translate-x-15% lg:translate-x-20%`} duration-1000`}
              // className={`flex justify-center items-start absolute -top-2 ${isAnimeRef1Visible ? `left-1/2 transform -translate-x-1/2` : `left-1/2 transform -translate-x-[calc(50%+10%)] md:-translate-x-[calc(50%+8%)] lg:-translate-x-[calc(50%-30%)]`} duration-1000`}
            >
              <img
                loading="lazy"
                src="/elements/card_white.png"
                className="mt-6 max-w-[300px] md:max-w-4/5 mx-auto aspect-[4/3]"
              />
            </div>

            {/* Info: 黑卡 (20240327 - Shirley) */}
            <div
              className={`relative ml-1/3 lg:ml-2/5 xl:ml-1/3 shrink-0 ${isAnimeRef1Visible ? `translate-x-0` : `-translate-x-10% md:-translate-x-15% lg:-translate-x-20%`} duration-1000`}
            >
              {' '}
              <img
                loading="lazy"
                src="/elements/card_black.png"
                className="mt-6 max-w-[300px] md:max-w-4/5 mx-auto  aspect-[4/3]"
              />
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default CTASection;
