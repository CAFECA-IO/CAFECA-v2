import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LandingNavbar from '../components/landing_navbar/landing_navbar';
import LandingFooter from '../components/landing_footer/landing_footer';
import Head from 'next/head';
import {FAVICON} from '../constants/display';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>Not Found - CAFECA</title>
        <link rel="icon" href={FAVICON} />
      </Head>

      <main>
        <div>
          <LandingNavbar />
          <div className="flex flex-col bg-gray100 font-jost min-h-1000px h-screen">
            <div className="flex justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col w-full max-w-[1200px] max-md:max-w-full">
                <div className="flex justify-center items-center px-16 text-center max-md:px-5 max-md:max-w-full">
                  <div className="flex flex-col max-w-full w-[960px]">
                    <div className="flex flex-col font-bold leading-[110%] max-md:max-w-full">
                      <Image
                        alt="404 monster"
                        loading="lazy"
                        src="/elements/july_1_1_1.png"
                        width={280}
                        height={176}
                        className="self-center max-w-full aspect-[0.63] w-[280px]"
                      />
                      <div className="mt-2 lg:text-6xl text-primaryPurple max-md:max-w-full text-4xl">
                        Oops! Page not found.
                      </div>
                      <div className="mt-2 text-4xl text-gray900 max-md:max-w-full">404</div>
                    </div>
                    <div className="mt-6 text-base leading-6 text-coolGray90 max-md:max-w-full">
                      Page is on vacation. Please try again later.
                    </div>
                  </div>
                </div>
                <Link
                  href={'/'}
                  className="flex flex-col justify-center self-center mt-14 max-w-full text-lg font-bold leading-6 text-gray100 max-md:mt-10"
                >
                  <div className="flex gap-2 justify-center px-14 py-5 bg-primaryPurple rounded-xl max-md:px-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      fill="none"
                      viewBox="0 0 25 25"
                    >
                      <path
                        fill="#fff"
                        d="M10.771 2.89a2.376 2.376 0 012.971 0l7.134 5.706c.563.452.892 1.135.892 1.858v9.537a2.378 2.378 0 01-2.377 2.377h-4.756a1.019 1.019 0 01-1.019-1.019v-7.133H10.9v7.133a1.02 1.02 0 01-1.02 1.02H5.125a2.378 2.378 0 01-2.377-2.378v-9.538c0-.722.328-1.405.892-1.857l7.132-5.706zm1.698 1.591a.34.34 0 00-.423 0l-7.134 5.707a.339.339 0 00-.127.266v9.537c0 .187.152.34.34.34H8.86v-7.134a1.019 1.019 0 011.019-1.019h4.755a1.019 1.019 0 011.02 1.019v7.133h3.736a.34.34 0 00.34-.34v-9.537a.34.34 0 00-.128-.265L12.469 4.48z"
                      ></path>
                    </svg>
                    <div>Home Page</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <LandingFooter />
        </div>
      </main>
    </>
  );
};

export default Custom404;
