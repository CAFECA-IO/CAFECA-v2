import Image from 'next/image';
import React from 'react';
import ContactForm from '../contact_form/contact_form';

const ContactFormSection = () => {
  return (
    <div id="contact-us" className="relative h-1440px">
      <div className="absolute z-10 h-full w-full bg-contact_bg bg-cover bg-no-repeat"></div>

      <div className="absolute top-0 h-500px w-full">
        {' '}
        {/* <Image
          loading="lazy"
          src="/animations/contact_bg.svg"
          alt="contact_bg"
          fill
          style={{objectFit: 'contain'}}
          className="z-10"
        /> */}
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
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
