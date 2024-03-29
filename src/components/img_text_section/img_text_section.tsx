import React from 'react';

const ImgTextSection = () => {
  return (
    <div>
      <div className="p-20 w-full max-lg:px-5 max-lg:max-w-full">
        <div className="flex gap-5 max-lg:flex-col-reverse max-lg:gap-0">
          <div className="flex flex-col w-6/12 max-lg:ml-0 max-lg:w-full">
            <img
              loading="lazy"
              src="/elements/id_recommend.png"
              className="self-stretch my-auto w-full aspect-[1.49] max-lg:mt-10 max-lg:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col grow justify-center py-8 max-lg:mt-10 max-lg:max-w-full">
              <div className="flex flex-col max-lg:max-w-full">
                <div className="justify-center text-4xl font-bold leading-10 text-gray900 max-lg:max-w-full">
                  <span className="text-primaryPurple">Simple</span> Way To Prove Who You Are
                </div>
                <div className="mt-12 text-lg leading-6 text-gray-500 max-lg:mt-10 max-lg:max-w-full">
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
