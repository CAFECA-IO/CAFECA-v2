import React from 'react';
import {FaqSection} from '../constants/display';
import FAQItem from '../components/faq_item/faq_item';

const Trial = () => {
  return (
    <div>
      {FaqSection.map(item => (
        <FAQItem key={item.title} question={item.title} answer={item.content} />
      ))}
    </div>
  );
};

export default Trial;
