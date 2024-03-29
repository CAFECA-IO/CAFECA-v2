import Image from 'next/image';
import React from 'react';
import {
  CAFECA_ADDRESS_IN_ENGLISH,
  CAFECA_ADDRESS_ON_GOOGLE_MAP,
  REACT_APP_GITHUB_LINK,
  CAFECA_PHONE_NUMBER,
  COPYRIGHT,
} from '../../constants/config';
import Link from 'next/link';
import {FaPhoneAlt} from 'react-icons/fa';

const LandingFooter = () => {
  return (
    <div>
      {' '}
      <div className="z-20 flex gap-5 justify-center px-10 py-6 bg-gray900 max-md:flex-wrap max-md:px-5 lg:flex-row flex-col">
        <div className="flex flex-1 items-start gap-5 lg:gap-3 justify-start max-md:flex-wrap lg:flex-row flex-wrap flex-col">
          {/* Info: location information (20240327 - Shirley) */}
          <Link href={CAFECA_ADDRESS_ON_GOOGLE_MAP || ''} target="_blank">
            <div className="flex gap-2 text-sm leading-5 text-right text-white items-center">
              {/* Info: location svg (20240327 - Shirley) */}
              <div className="shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="none"
                  viewBox="0 0 25 25"
                >
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 13.468a3 3 0 100-6 3 3 0 000 6z"
                    // className="fill-current text-blue-500"
                  ></path>
                  <path
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2.468a8 8 0 00-8 8c0 1.892.402 3.13 1.5 4.5l6.5 7.5 6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 00-8-8z"
                    // className="fill-current text-blue-500"
                  ></path>
                </svg>
              </div>

              <div className="my-auto w-fit text-start">{CAFECA_ADDRESS_IN_ENGLISH}</div>
            </div>
          </Link>
          {/* Info: phone information (20240327 - Shirley) */}
          <Link href={`tel:${CAFECA_PHONE_NUMBER}`}>
            <div className="flex gap-2 text-sm leading-5 text-right text-white items-center">
              <div className="shrink-0 flex items-center justify-center mx-auto w-25px h-25px">
                {/* Info: phone svg (20240327 - Shirley) */}
                <FaPhoneAlt size={20} />

                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#F2F2F2"
                    d="M.833 7.33a18.466 18.466 0 009.566 9.293l.68.303a3.5 3.5 0 004.33-1.247l.889-1.324a1 1 0 00-.203-1.335l-3.012-2.43a.998.998 0 00-1.431.183l-.932 1.257a12.14 12.14 0 01-5.51-5.511l1.256-.932a1 1 0 00.183-1.431l-2.43-3.012A1 1 0 002.884.94l-1.333.894A3.5 3.5 0 00.314 6.19l.519 1.14z"
                  ></path>
                </svg> */}
              </div>

              <div className="my-auto w-fit text-end">{CAFECA_PHONE_NUMBER}</div>
            </div>
          </Link>
          {/* Info: social media icons (20240327 - Shirley) */}
          <div className="flex items-center justify-start lg:justify-center gap-2">
            {/* Info: fb svg (20240327 - Shirley) */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              fill="none"
              viewBox="0 0 25 24"
            >
              <g>
                <path
                  fill="#fff"
                  d="M9.513 5.865v2.748H7.499v3.36h2.014v9.986h4.134v-9.985h2.775s.26-1.611.386-3.373h-3.144V6.303c0-.343.45-.805.896-.805h2.254V2H13.75C9.41 2 9.513 5.363 9.513 5.865z"
                ></path>
              </g>
            </svg> */}
            {/* Info: twitter svg (20240327 - Shirley) */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              fill="none"
              viewBox="0 0 25 24"
            >
              <g>
                <path
                  fill="#fff"
                  d="M22.467 5.907a8.291 8.291 0 01-2.356.637 4.07 4.07 0 001.804-2.234 8.35 8.35 0 01-2.607.98 4.12 4.12 0 00-2.995-1.275c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92a11.708 11.708 0 01-8.456-4.22 3.964 3.964 0 00-.554 2.03 4.02 4.02 0 001.824 3.362 4.151 4.151 0 01-1.858-.507v.05c0 1.958 1.415 3.591 3.29 3.963-.353.094-.716.141-1.08.141-.265 0-.522-.025-.773-.075a4.098 4.098 0 003.832 2.807 8.313 8.313 0 01-5.095 1.727c-.332 0-.658-.02-.98-.056a11.728 11.728 0 006.29 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523a8.126 8.126 0 002.052-2.089z"
                ></path>
              </g>
            </svg> */}

            {/* Info: linkedin svg (20240327 - Shirley) */}
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="24"
              fill="none"
              viewBox="0 0 25 24"
            >
              <g>
                <path
                  fill="#fff"
                  d="M22.426 13.719v7.379h-4.278v-6.885c0-1.73-.62-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.87h4.28v1.825l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM4.888 2.026c-1.463 0-2.421.96-2.421 2.223 0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.99 2.42-2.224-.026-1.263-.926-2.223-2.391-2.223h-.001zM2.72 21.098h4.278V8.228H2.72v12.87z"
                ></path>
              </g>
            </svg> */}

            {/* Info: github svg (20240327 - Shirley) */}
            <Link href={REACT_APP_GITHUB_LINK || ''} target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="none"
                viewBox="0 0 25 25"
              >
                <g clipPath="url(#clip0_1640_5301)">
                  <path
                    fill="#fff"
                    d="M12.467.048a12 12 0 00-12 12c0 5.304 3.444 9.804 8.208 11.4.6.096.792-.276.792-.6V20.82c-3.324.72-4.032-1.608-4.032-1.608-.552-1.392-1.332-1.764-1.332-1.764-1.092-.744.084-.72.084-.72 1.2.084 1.836 1.236 1.836 1.236 1.044 1.824 2.808 1.284 3.492.996.108-.78.42-1.308.756-1.608-2.664-.3-5.46-1.332-5.46-5.904 0-1.332.456-2.4 1.236-3.252-.12-.3-.54-1.548.12-3.168 0 0 1.008-.324 3.3 1.224.948-.264 1.98-.396 3-.396s2.052.132 3 .396c2.292-1.548 3.3-1.224 3.3-1.224.66 1.62.24 2.868.12 3.168.78.852 1.236 1.92 1.236 3.252 0 4.584-2.808 5.592-5.484 5.892.432.372.828 1.104.828 2.22v3.288c0 .324.192.708.804.6 4.764-1.608 8.196-6.096 8.196-11.4a12.001 12.001 0 00-12-12z"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1640_5301">
                    <path fill="#fff" d="M0 0H24V24H0z" transform="translate(.467)"></path>
                  </clipPath>
                </defs>
              </svg>
            </Link>
          </div>
        </div>
        <div className="my-auto text-sm leading-5 text-right text-white max-md:max-w-full">
          {COPYRIGHT}
        </div>
      </div>
    </div>
  );
};

export default LandingFooter;
