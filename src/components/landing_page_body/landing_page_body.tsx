import React from 'react';
import Image from 'next/image'; // Add this import
import CtaSection from '../cta_section/cta_section';
import IntroCardsSection from '../intro_cards_section/intro_cards_section';
import TextImgSection from '../text_img_section/text_img_section';
import ImgTextSection from '../img_text_section/img_text_section';
import CarouselSection from '../carousel_section/carousel_section';
import ContactFormSection from '../contact_form_section/contact_form_section';
import LandingFooter from '../landing_footer/landing_footer';

const LandingPageBody = () => {
  return (
    <>
      <div>
        <CtaSection />
        <IntroCardsSection />
        <TextImgSection />
        <ImgTextSection />
        <CarouselSection />
        <ContactFormSection />
      </div>
      {/* <LandingFooter /> */}
    </>
  );
};

export default LandingPageBody;
