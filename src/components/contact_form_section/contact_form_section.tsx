import Image from 'next/image';
import React from 'react';
import ContactForm from '../contact_form/contact_form';

const ContactFormSection = () => {
  return (
    <div id="contact-us" className="relative h-1440px">
      {/* Info: svg animation (20240329 - Shirley) */}
      <div className="absolute z-10 h-1/2 w-full bg-contact_bg bg-cover bg-no-repeat"></div>

      <div className="absolute top-0 h-500px w-full">
        {' '}
        <div className="pt-0 flex flex-col w-full max-md:max-w-full">
          <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 pt-16 pb-0 w-full min-h-1440px max-md:px-5 max-md:max-w-full">
            <div className="absolute inset-0 size-full bg-gray100">
              {/* Info: grid background svg (20240329 - Shirley) */}
              <Image
                loading="lazy"
                src="/elements/group_691.svg"
                alt="grid background"
                fill
                style={{objectFit: 'cover'}}
                className="z-0"
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
