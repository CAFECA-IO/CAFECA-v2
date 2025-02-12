import React from 'react';
import LandingNavbar from '../components/landing_navbar/landing_navbar';
import LandingFooter from '../components/landing_footer/landing_footer';
import Image from 'next/image';
import Head from 'next/head';
import {FAVICON} from '../constants/display';

const ComingSoon = () => {
  return (
    <>
      <Head>
        <title>Coming soon - CAFECA</title>
        <link rel="icon" href={FAVICON} />
      </Head>
      <main>
        <div>
          <LandingNavbar />
          <div className="flex flex-col items-start bg-gray100 font-jost">
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

            <div className="flex lg:flex-row flex-col w-full justify-between items-end">
              {/* Info: (desktop) Purple rectangle (20240402 - Shirley) */}
              {/* <div className="z-[10] lg:order-1 order-2 bg-purple_rectangle mt-0 bg-no-repeat lg:bg-contain xl:bg-cover hidden lg:block w-600px xl:w-[850px] h-600px xl:h-[600px] -ml-0"> */}
              <div className="z-0 lg:order-1 order-2 bg-purple_rectangle mt-0 bg-no-repeat bg-center lg:bg-cover xl:bg-cover hidden lg:block w-[800px] xl:w-[900px] h-600px xl:h-[600px] -ml-0 -mb-0">
                {/* Info: countdown (20240402 - Shirley) */}
                <div className="mt-[19rem] xl:mt-[20rem] ml-0 lg:ml-10 max-w-full w-[600px] max-md:mt-10">
                  <div className="flex gap-2 xl:gap-5 lg:flex-row flex-col">
                    <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                      {/* Days */}
                      <div className="flex flex-col grow text-center whitespace-nowrap leading-[110%] max-md:mt-10">
                        <div className="flex gap-2.5 lg:text-5xl xl:text-6xl font-bold text-gray900 text-4xl">
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
                        <div className="flex gap-2.5 lg:text-5xl xl:text-6xl font-bold text-gray900 text-4xl">
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
                        <div className="flex gap-2.5 lg:text-5xl xl:text-6xl font-bold text-gray900 text-4xl">
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

              {/* Info: (mobile) Purple rectangle (20240402 - Shirley) */}
              {/* Info: countdown (20240402 - Shirley) */}
              <div className="mt-[10rem] mb-[10rem] xl:mt-[22rem] ml-0 lg:ml-10 max-w-full w-full max-md:mt-10 lg:hidden block lg:order-1 order-1">
                <div className="flex gap-0 lg:flex-row flex-col max-md:gap-0 w-full justify-center items-center">
                  <div className="flex flex-col max-md:ml-0 max-md:w-full">
                    {/* Days */}
                    <div className="flex flex-col justify-center items-center grow text-start whitespace-nowrap leading-[110%] max-md:mt-10">
                      <div className="flex gap-2.5 lg:text-5xl xl:text-6xl font-bold text-gray900 text-4xl">
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
                    <div className="flex flex-col justify-center items-center grow text-start whitespace-nowrap leading-[110%] max-md:mt-10">
                      <div className="flex gap-2.5 lg:text-5xl xl:text-6xl font-bold text-gray900 text-4xl">
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
                    <div className="flex flex-col justify-center items-center grow text-start leading-[110%] max-md:mt-10">
                      <div className="flex gap-2.5 lg:text-5xl xl:text-6xl font-bold text-gray900 text-4xl">
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

              {/* Info: (Desktop) Image of hand holding CAFECA card (20240402 - Shirley) */}
              <div className="z-20 lg:order-2 order-1 lg:block hidden absolute right-0">
                <div className="lg:w-500px xl:w-600px xl:h-600px 2xl:w-800px lg:h-500px 2xl:h-800px relative">
                  <Image
                    src="/elements/mockup_1_1.png"
                    alt="hand holding CAFECA card"
                    fill
                    style={{objectFit: 'contain'}}
                  />
                </div>{' '}
              </div>

              {/* Info: (Mobile) Image of hand holding CAFECA card (20240402 - Shirley) */}
              <div className="lg:order-2 order-2 w-full justify-center flex lg:hidden">
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
      </main>
    </>
  );
};

export default ComingSoon;
