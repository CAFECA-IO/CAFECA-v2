import React from 'react';

const ImgTextSection = () => {
  return (
    <div>
      <div className="p-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col-reverse max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ea8901ae12d5f2305f993509f042e38f40f82c78c8ec6b914095e23800fa9ba1?apiKey=0e17b0b875f041659e186639705112b1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea8901ae12d5f2305f993509f042e38f40f82c78c8ec6b914095e23800fa9ba1?apiKey=0e17b0b875f041659e186639705112b1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea8901ae12d5f2305f993509f042e38f40f82c78c8ec6b914095e23800fa9ba1?apiKey=0e17b0b875f041659e186639705112b1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea8901ae12d5f2305f993509f042e38f40f82c78c8ec6b914095e23800fa9ba1?apiKey=0e17b0b875f041659e186639705112b1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea8901ae12d5f2305f993509f042e38f40f82c78c8ec6b914095e23800fa9ba1?apiKey=0e17b0b875f041659e186639705112b1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea8901ae12d5f2305f993509f042e38f40f82c78c8ec6b914095e23800fa9ba1?apiKey=0e17b0b875f041659e186639705112b1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea8901ae12d5f2305f993509f042e38f40f82c78c8ec6b914095e23800fa9ba1?apiKey=0e17b0b875f041659e186639705112b1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ea8901ae12d5f2305f993509f042e38f40f82c78c8ec6b914095e23800fa9ba1?apiKey=0e17b0b875f041659e186639705112b1&"
              className="self-stretch my-auto w-full aspect-[1.49] max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-8 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="justify-center text-4xl font-bold leading-10 text-slate-800 max-md:max-w-full">
                  <span className="text-primaryPurple">Simple</span> Way To Prove Who You Are
                </div>
                <div className="mt-12 text-lg leading-6 text-gray-500 max-md:mt-10 max-md:max-w-full">
                  <span className="font-bold">Digital Resident Identity:</span> An identity
                  verification within or outside Palau allows for extension of visa duration up to
                  180 days.
                  <br />
                  <span className="font-bold">Financial Services:</span> Apply for Palauan financial
                  services, such as exchanges or banks.
                  <br />
                  <span className="font-bold">Hotel Booking:</span> Book accommodations in Palau,
                  while also enjoying relevant discounts provided by the tourism industry.
                  <br />
                  <span className="font-bold">Telecom Service:</span> Apply for local telecom
                  services in Palau.
                  <br />
                  <span className="font-bold">Business and Commercial Activities:</span> In the
                  future, it may be possible to use it to establish businesses in Palau and
                  participate in global commercial activities.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgTextSection;
