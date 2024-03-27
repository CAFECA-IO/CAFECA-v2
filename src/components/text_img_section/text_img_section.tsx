import React from 'react';

const TextImgSection = () => {
  return (
    <div>
      <div className="p-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center self-stretch py-8 my-auto font-bold max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col max-md:max-w-full">
                <div className="justify-center text-5xl leading-[52.8px] text-gray900 max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                  <span className="text-primaryPurple">One-Time</span> KYC Only
                </div>
                <div className="mt-12 text-lg leading-6 text-gray-500 max-md:mt-10 max-md:max-w-full">
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
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0a1ef506f3be7acc31c3a3fb998d5f5a44752ad28705cc13bbf78173ae737bc3?apiKey=0e17b0b875f041659e186639705112b1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1ef506f3be7acc31c3a3fb998d5f5a44752ad28705cc13bbf78173ae737bc3?apiKey=0e17b0b875f041659e186639705112b1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1ef506f3be7acc31c3a3fb998d5f5a44752ad28705cc13bbf78173ae737bc3?apiKey=0e17b0b875f041659e186639705112b1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1ef506f3be7acc31c3a3fb998d5f5a44752ad28705cc13bbf78173ae737bc3?apiKey=0e17b0b875f041659e186639705112b1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1ef506f3be7acc31c3a3fb998d5f5a44752ad28705cc13bbf78173ae737bc3?apiKey=0e17b0b875f041659e186639705112b1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1ef506f3be7acc31c3a3fb998d5f5a44752ad28705cc13bbf78173ae737bc3?apiKey=0e17b0b875f041659e186639705112b1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1ef506f3be7acc31c3a3fb998d5f5a44752ad28705cc13bbf78173ae737bc3?apiKey=0e17b0b875f041659e186639705112b1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0a1ef506f3be7acc31c3a3fb998d5f5a44752ad28705cc13bbf78173ae737bc3?apiKey=0e17b0b875f041659e186639705112b1&"
              className="self-stretch my-auto w-full aspect-[1.75] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImgSection;
