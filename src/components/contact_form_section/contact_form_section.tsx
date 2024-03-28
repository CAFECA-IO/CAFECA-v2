import Image from 'next/image';
import React from 'react';

const ContactFormSection = () => {
  return (
    <div id="contact-us" className="relative h-1440px">
      <div className="absolute top-0 h-500px w-full">
        {' '}
        <Image
          loading="lazy"
          src="/animations/contact_bg.svg"
          alt="contact_bg"
          fill
          style={{objectFit: 'cover'}}
          className="z-10"
        />
        <div className="pt-0 flex flex-col w-full max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 pt-16 pb-0 w-full min-h-[1440px] max-md:px-5 max-md:max-w-full">
            {/* <div className="relative h-500px w-full">
            <Image
              loading="lazy"
              src="/animations/contact_bg.svg"
              alt="contact_bg"
              fill
              style={{objectFit: 'cover'}}
              className="z-10"
            />
          </div> */}
            <img
              loading="lazy"
              src="/elements/group_691.svg"
              className="object-cover absolute inset-0 size-full bg-gray100"
            />

            <div className="flex relative flex-col mb-24 max-w-full w-[712px] max-md:mb-10 z-50 -mt-48">
              <div className="flex flex-col self-center max-w-full text-center w-[616px]">
                <div className="justify-center text-5xl font-bold leading-[52.8px] text-gray900 max-md:max-w-full max-md:text-4xl">
                  Get In Touch
                </div>
                <div className="mt-2 text-lg leading-6 text-gray-500 max-md:max-w-full">
                  Please fill the form below, we will reply you as soon as possible.
                </div>
              </div>
              <div className="flex flex-col justify-center p-12 mt-20 text-base leading-6 bg-white rounded-3xl shadow-2xl max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col max-md:max-w-full">
                  <div className="flex gap-4 max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1">
                      <div className="justify-center self-start py-1.5 font-bold text-gray900">
                        First Name
                      </div>
                      <div className="flex flex-col justify-center items-start px-8 py-4 mt-2 text-gray-400 bg-white rounded-md border border-solid border-gray900 max-md:px-5">
                        <div className="justify-center py-1.5">Ex: Eric</div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="justify-center self-start py-1.5 font-bold text-gray900">
                        Last Name
                      </div>
                      <div className="flex flex-col justify-center items-start px-8 py-4 mt-2 text-gray-400 bg-white rounded-md border border-solid border-gray900 max-md:px-5">
                        <div className="justify-center py-1">Ex: Chang</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4 max-md:max-w-full">
                    <div className="justify-center self-start py-1.5 font-bold text-gray900">
                      Phone Number
                    </div>
                    <div className="flex gap-5 px-8 py-4 mt-2 text-gray-400 whitespace-nowrap bg-white rounded-md border border-solid border-gray900 max-md:flex-wrap max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/40c2635188b5534b35019b7ef634ae9fd34ef71c4c3bae044c900bdf1ba623ec?apiKey=0e17b0b875f041659e186639705112b1&"
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="justify-center self-start py-1.5">+886-9-XXXXXXXX</div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4 whitespace-nowrap max-md:max-w-full">
                    <div className="justify-center self-start py-1.5 font-bold text-gray900">
                      E-Mail
                    </div>
                    <div className="flex gap-5 px-8 py-4 mt-2 text-gray-400 bg-white rounded-md border border-solid border-gray900 max-md:flex-wrap max-md:px-5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f48d35a029e435c7dded6940ab7143b762a7279c089f6078fedc0ebd39a4a586?apiKey=0e17b0b875f041659e186639705112b1&"
                        className="shrink-0 w-6 aspect-square"
                      />
                      <div className="justify-center self-start py-1.5">XXXX@mail.com</div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-4 max-md:max-w-full">
                    <div className="justify-center self-start py-1 font-bold whitespace-nowrap text-gray900">
                      Message
                    </div>
                    <div className="flex flex-col justify-center items-start px-8 py-4 mt-2 text-gray-400 bg-white rounded-md border border-solid border-gray900 max-md:px-5 max-md:max-w-full">
                      <div className="justify-center py-1 mb-8">What do you want to tell us...</div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-end items-end px-0 mt-4 font-bold whitespace-nowrap text-neutral-100 max-md:pl-5 max-md:max-w-full">
                    <div className="flex gap-2 justify-center px-12 py-4 bg-primaryPurple rounded-xl max-md:px-5">
                      <div>Send</div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a6c3749a72786030e3e56880cc709bd53c0ee9f79e21bc692d17e9da32df93e?apiKey=0e17b0b875f041659e186639705112b1&"
                        className="shrink-0 w-6 aspect-square"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
