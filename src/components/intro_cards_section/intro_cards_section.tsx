import React from 'react';

const IntroCardsSection = () => {
  return (
    <div>
      <div className="justify-between p-20 w-full max-lg:px-5">
        <div className="flex gap-5 max-lg:flex-col max-lg:gap-0">
          <div className="flex flex-col w-[33%] max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col grow px-4 py-8 w-full bg-white rounded-2xl shadow-2xl max-lg:mt-10 justify-between">
              <div className="flex flex-col justify-center pt-5 pr-1 pb-4 pl-4">
                <div className="justify-center text-4xl font-bold leading-10 text-gray900">
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
                src="/elements/fingerprint.svg"
                className="self-center mt-2 max-w-full aspect-square w-[230px] lg:w-full lg:px-10 2xl:px-20 3xl:px-28"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col grow px-4 pt-8 w-full bg-white rounded-2xl shadow-2xl max-lg:mt-10 justify-between items-center">
              <div className="flex flex-col pt-5 pr-1 pb-4 pl-4">
                <div className="justify-center text-4xl font-bold leading-10 text-gray900">
                  No Worries about Card Loss
                </div>
                <div className="mt-4 text-base leading-6 text-gray-500">
                  CAFECA employs patented technology, supporting RSA/ECC key operations and a
                  reliable backup card recovery mechanism. If you lose your card and need to
                  retrieve your identification, just purchase another CAFECA card, add your
                  fingerprint, and restore access.
                </div>
              </div>
              <div className="flex flex-col justify-center mx-0 mt-2 max-lg:mx-0">
                <img
                  loading="lazy"
                  src="/elements/card.png"
                  className="w-screen md:w-50vw lg:w-screen aspect-[1.09]"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-lg:ml-0 max-lg:w-full">
            <div className="flex flex-col grow pt-8 w-full bg-white rounded-2xl shadow-2xl max-lg:mt-10 justify-between">
              <div className="flex flex-col pt-5 pr-1 pb-4 pl-4 mx-4 max-lg:mx-2.5">
                <div className="justify-center text-4xl font-bold leading-10 text-gray900">
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
                src="/elements/pic.png"
                className="mt-2 w-60vw md:w-50vw lg:w-full aspect-[1.11]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroCardsSection;
