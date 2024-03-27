import React from 'react';

const IntroCardsSection = () => {
  return (
    <div>
      <div className="justify-between p-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-4 py-8 w-full bg-white rounded-2xl shadow-2xl max-md:mt-10">
              <div className="flex flex-col justify-center pt-5 pr-1 pb-4 pl-4">
                <div className="justify-center text-4xl font-bold leading-10 text-slate-800">
                  Fingerprint Authentication
                </div>
                <div className="mt-4 text-base leading-6 text-gray-500">
                  Unlock and Access Your ID Card Securely through Fingerprint Authentication with
                  the AEIGS TECH High-Performance Fingerprint Sensor. Rest assured, the Private Keys
                  Remain Completely Isolated from External Access, Ensuring Enhanced Security and
                  Mitigating Any Concerns of Personal Information Theft.
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca2817f59fcae29396d164b32ec92e54381b5634e51de37374e63a421a3ae1ae?apiKey=0e17b0b875f041659e186639705112b1&"
                className="self-center mt-2 max-w-full aspect-square w-[230px]"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-4 pt-8 w-full bg-white rounded-2xl shadow-2xl max-md:mt-10">
              <div className="flex flex-col pt-5 pr-1 pb-4 pl-4">
                <div className="justify-center text-4xl font-bold leading-10 text-slate-800">
                  No Worries about Card Loss
                </div>
                <div className="mt-4 text-base leading-6 text-gray-500">
                  CAFECA employs patented technology, supporting RSA/ECC key operations and a
                  reliable backup card recovery mechanism. If you lose your card and need to
                  retrieve your identification, just purchase another CAFECA card, add your
                  fingerprint, and restore access.
                </div>
              </div>
              <div className="flex flex-col justify-center mx-7 mt-2 max-md:mx-2.5">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/870ab4cf20aeded001f1f5733b0ba921ecc68b954d54c49876e4025ee60a77d3?apiKey=0e17b0b875f041659e186639705112b1&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/870ab4cf20aeded001f1f5733b0ba921ecc68b954d54c49876e4025ee60a77d3?apiKey=0e17b0b875f041659e186639705112b1&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/870ab4cf20aeded001f1f5733b0ba921ecc68b954d54c49876e4025ee60a77d3?apiKey=0e17b0b875f041659e186639705112b1&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/870ab4cf20aeded001f1f5733b0ba921ecc68b954d54c49876e4025ee60a77d3?apiKey=0e17b0b875f041659e186639705112b1&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/870ab4cf20aeded001f1f5733b0ba921ecc68b954d54c49876e4025ee60a77d3?apiKey=0e17b0b875f041659e186639705112b1&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/870ab4cf20aeded001f1f5733b0ba921ecc68b954d54c49876e4025ee60a77d3?apiKey=0e17b0b875f041659e186639705112b1&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/870ab4cf20aeded001f1f5733b0ba921ecc68b954d54c49876e4025ee60a77d3?apiKey=0e17b0b875f041659e186639705112b1&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/870ab4cf20aeded001f1f5733b0ba921ecc68b954d54c49876e4025ee60a77d3?apiKey=0e17b0b875f041659e186639705112b1&"
                  className="w-full aspect-[1.09]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-8 w-full bg-white rounded-2xl shadow-2xl max-md:mt-10">
              <div className="flex flex-col pt-5 pr-1 pb-4 pl-4 mx-4 max-md:mx-2.5">
                <div className="justify-center text-4xl font-bold leading-10 text-slate-800">
                  NFC <br />
                  Technology
                </div>
                <div className="mt-4 text-base leading-6 text-gray-500">
                  Utilizes a contactless transmission mechanism to safeguard against privacy
                  information leakage.
                  <br />
                </div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca701ec44fc3db10362e2a0783e65dae4a20ba47f969a29f7007661e2d220b23?apiKey=0e17b0b875f041659e186639705112b1&"
                className="mt-2 w-full aspect-[1.11]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCardsSection;
