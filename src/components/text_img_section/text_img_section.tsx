import React from 'react';

const TextImgSection = () => {
  return (
    <div>
      <div className="p-20 w-full max-lg:px-5 max-lg:max-w-full">
        <div className="flex gap-5 max-lg:flex-col max-lg:gap-0">
          <div className="flex flex-col w-[43%] max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col justify-center self-stretch py-8 my-auto font-bold max-lg:mt-10 max-lg:max-w-full">
              <div className="flex flex-col max-lg:max-w-full">
                <div className="justify-center text-5xl leading-[52.8px] text-gray900 max-lg:max-w-full max-lg:text-4xl max-lg:leading-[49px]">
                  <span className="text-primaryPurple">One-Time</span> KYC Only
                </div>
                <div className="mt-12 text-lg leading-6 text-gray-500 max-lg:mt-10 max-lg:max-w-full">
                  <span className="">Step 1:</span> Upload ID <br />
                  <span className="">Step 2:</span> Verify personal info
                  <br />
                  <span className="">Step 3:</span> Facial Identify <br />
                  <span className="">Step 4:</span> Waiting for Approval <br />
                  <span className="text-sm leading-5 ">
                    (Your provided information will undergo review by the Palauan government.)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-lg:ml-0 max-lg:w-full">
            <img
              loading="lazy"
              src="/elements/kyc.png"
              className="self-stretch my-auto w-full aspect-[1.75] max-lg:mt-10 max-lg:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImgSection;
