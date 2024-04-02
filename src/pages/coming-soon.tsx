import React from 'react';
import LandingNavbar from '../components/landing_navbar/landing_navbar';
import LandingFooter from '../components/landing_footer/landing_footer';
import Image from 'next/image';

const ComingSoon = () => {
  return (
    <div>
      <LandingNavbar />
      <div className="flex flex-col items-start bg-gray100 font-jost">
        {/* <div className="flex gap-5 justify-between self-stretch px-20 py-3.5 w-full text-lg font-bold leading-6 text-gray-500 bg-gray100 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3fb2dbc525fcf57db38c9b66a7877d8d17b62e0d0dbc3017fc56768fdc1d4a0a?apiKey=0e17b0b875f041659e186639705112b1&"
            className="shrink-0 my-auto max-w-full aspect-[3.33] w-[120px]"
          />
          <div className="flex gap-0 max-md:flex-wrap">
            <div className="justify-center px-9 py-5 whitespace-nowrap rounded-xl max-md:px-5">
              Apply
            </div>
            <div className="justify-center px-9 py-5 rounded-xl max-md:px-5">My Order</div>
            <div className="justify-center px-9 py-5 whitespace-nowrap rounded-xl max-md:px-5">
              FAQ
            </div>
            <div className="justify-center px-9 py-5 rounded-xl max-md:px-5">Contact Us</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a0895ec5934e8310d065b95b7626734b2311f09b3339ffcf0d163d698f91d3a?apiKey=0e17b0b875f041659e186639705112b1&"
              className="shrink-0 aspect-square w-[60px]"
            />
          </div>
        </div> */}

        {/* <div className="flex flex-col justify-start"> */}
        <div className="flex flex-col justify-start gap-10 items-start mt-6 max-w-full text-6xl font-bold leading-[61.6px] text-gray900 max-md:text-4xl mx-20">
          <Image
            alt="big logo"
            loading="lazy"
            src="/logos/logo.svg"
            className="mt-20 max-w-full max-md:mt-10"
            width={325}
            height={98}
          />
          <div className="justify-center max-md:max-w-full max-md:text-4xl">Coming Soon in</div>
        </div>
        {/* </div> */}
        {/* ml-20 */}

        <div className="flex lg:flex-row flex-col w-full justify-between items-end">
          {/* Info: Purple rectangle on desktop (20240402 - Shirley) */}
          {/*           <div className="z-[10] lg:order-1 order-2 bg-purple_rectangle mt-0 bg-no-repeat lg:bg-contain xl:bg-cover hidden lg:block w-600px xl:w-[850px] h-600px xl:h-[600px] -ml-0"> */}
          <div className="z-0 lg:order-1 order-2 bg-purple_rectangle mt-0 bg-no-repeat lg:bg-contain xl:bg-contain hidden lg:block w-[800px] xl:w-[850px] h-600px xl:h-[600px] -ml-0 -mb-0">
            {/* Info: countdown (20240402 - Shirley) */}
            <div className="mt-[15rem] xl:mt-[22rem] ml-0 lg:ml-10 max-w-full w-[200px] xl:w-[622px] max-md:mt-10">
              <div className="flex gap-2 xl:gap-5 lg:flex-row flex-col">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  {/* Days */}
                  <div className="flex flex-col grow text-center whitespace-nowrap leading-[110%] max-md:mt-10">
                    <div className="flex gap-2.5 lg:text-4xl xl:text-6xl font-bold text-gray900 text-4xl">
                      <div className="justify-center px-6 py-10 bg-white rounded-[20px] max-md:px-5 max-md:text-4xl shadow-[inset_0px_4px_4px_0px_rgba(93,93,123,0.25)]">
                        9
                      </div>
                      <div className="justify-center px-6 py-10 bg-white rounded-[20px] max-md:px-5 max-md:text-4xl shadow-[inset_0px_4px_4px_0px_rgba(93,93,123,0.25)]">
                        9
                      </div>
                    </div>
                    <div className="justify-center px-16 py-4 text-xl font-semibold text-white max-md:px-5">
                      DAYS
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-center whitespace-nowrap leading-[110%] max-md:mt-10">
                    <div className="flex gap-2.5 lg:text-4xl xl:text-6xl font-bold text-gray900 text-4xl">
                      {' '}
                      <div className="justify-center px-6 py-10 bg-white rounded-[20px] max-md:px-5 max-md:text-4xl shadow-[inset_0px_4px_4px_0px_rgba(93,93,123,0.25)]">
                        2
                      </div>
                      <div className="justify-center px-6 py-10 bg-white rounded-[20px] max-md:px-5 max-md:text-4xl shadow-[inset_0px_4px_4px_0px_rgba(93,93,123,0.25)]">
                        3
                      </div>
                    </div>
                    <div className="justify-center px-14 py-4 text-xl font-semibold text-white max-md:px-5">
                      HOURS
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-center leading-[110%] max-md:mt-10">
                    <div className="flex gap-2.5 lg:text-4xl xl:text-6xl font-bold text-gray900 text-4xl">
                      {' '}
                      <div className="justify-center px-6 py-10 bg-white rounded-[20px] max-md:px-5 max-md:text-4xl shadow-[inset_0px_4px_4px_0px_rgba(93,93,123,0.25)]">
                        5
                      </div>
                      <div className="justify-center px-6 py-10 bg-white rounded-[20px] max-md:px-5 max-md:text-4xl shadow-[inset_0px_4px_4px_0px_rgba(93,93,123,0.25)]">
                        9
                      </div>
                    </div>
                    <div className="justify-center px-11 py-4 text-xl font-semibold text-white max-md:px-5">
                      MINUTES{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info: Purple rectangle on mobile (20240402 - Shirley) */}
          {/* Info: countdown (20240402 - Shirley) */}
          <div className="mt-[10rem] mb-[10rem] xl:mt-[22rem] ml-0 lg:ml-10 max-w-full w-full max-md:mt-10 lg:hidden block lg:order-1 order-2">
            <div className="flex gap-0 lg:flex-row flex-col max-md:gap-0 w-full justify-center items-center">
              <div className="flex flex-col max-md:ml-0 max-md:w-full">
                {/* Days */}
                <div className="flex flex-col grow text-start whitespace-nowrap leading-[110%] max-md:mt-10">
                  <div className="flex gap-2.5 lg:text-4xl xl:text-6xl font-bold text-gray900 text-4xl">
                    <div className="justify-center px-6 py-10 bg-white rounded-[20px] max-md:px-5 max-md:text-4xl shadow-[inset_0px_4px_4px_0px_rgba(93,93,123,0.25)]">
                      9
                    </div>
                    <div className="justify-center px-6 py-10 bg-white rounded-[20px] max-md:px-5 max-md:text-4xl shadow-[inset_0px_4px_4px_0px_rgba(93,93,123,0.25)]">
                      9
                    </div>
                  </div>
                  <div className="justify-center px-16 py-4 text-xl font-semibold text-gray900 max-md:px-5">
                    DAYS
                  </div>
                </div>
              </div>
              <div className="flex flex-col max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-start whitespace-nowrap leading-[110%] max-md:mt-10">
                  <div className="flex gap-2.5 lg:text-4xl xl:text-6xl font-bold text-gray900 text-4xl">
                    {' '}
                    <div className="justify-center px-6 py-10 bg-white rounded-[20px] max-md:px-5 max-md:text-4xl shadow-[inset_0px_4px_4px_0px_rgba(93,93,123,0.25)]">
                      2
                    </div>
                    <div className="justify-center px-6 py-10 bg-white rounded-[20px] max-md:px-5 max-md:text-4xl shadow-[inset_0px_4px_4px_0px_rgba(93,93,123,0.25)]">
                      3
                    </div>
                  </div>
                  <div className="justify-center px-14 py-4 text-xl font-semibold text-gray900 max-md:px-5">
                    HOURS
                  </div>
                </div>
              </div>
              <div className="flex flex-col max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-start leading-[110%] max-md:mt-10">
                  <div className="flex gap-2.5 lg:text-4xl xl:text-6xl font-bold text-gray900 text-4xl">
                    {' '}
                    <div className="justify-center px-6 py-10 bg-white rounded-[20px] max-md:px-5 max-md:text-4xl shadow-[inset_0px_4px_4px_0px_rgba(93,93,123,0.25)]">
                      5
                    </div>
                    <div className="justify-center px-6 py-10 bg-white rounded-[20px] max-md:px-5 max-md:text-4xl shadow-[inset_0px_4px_4px_0px_rgba(93,93,123,0.25)]">
                      9
                    </div>
                  </div>
                  <div className="justify-center px-11 py-4 text-xl font-semibold text-gray900 max-md:px-5">
                    MINUTES{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Info: Image of hand holding CAFECA card (20240402 - Shirley) */}
          <div className="lg:order-2 order-1 lg:block hidden">
            <div className="w-350px md:w-450px lg:w-500px xl:w-600px xl:h-600px 2xl:w-700px h-350px md:h-450px lg:h-500px 2xl:h-700px relative">
              <Image
                src="/elements/mockup_1_1.png"
                alt="hand holding CAFECA card"
                fill
                style={{objectFit: 'contain'}}
              />
            </div>{' '}
          </div>

          <div className="lg:order-2 order-1 w-full justify-center flex lg:hidden">
            <div className="w-350px md:w-450px lg:w-500px xl:w-600px xl:h-600px 2xl:w-700px h-350px md:h-450px lg:h-500px 2xl:h-700px relative">
              <Image
                src="/elements/mockup_1_1.png"
                alt="hand holding CAFECA card"
                fill
                style={{objectFit: 'contain'}}
              />
            </div>{' '}
          </div>
        </div>
      </div>
      <LandingFooter />
    </div>
  );
};

export default ComingSoon;
