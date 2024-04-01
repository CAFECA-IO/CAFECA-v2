import React from 'react';
import {FaqSection} from '../../constants/display';
import FAQItem from '../faq_item/faq_item';

interface FAQSectionProps {
  searchQuery: string;
}

const FAQSection = ({searchQuery}: FAQSectionProps) => {
  const filteredFaqSection = FaqSection.filter(
    item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const faqItems = filteredFaqSection.map(item => (
    <FAQItem key={item.title} question={item.title} answer={item.content} />
  ));

  return <div>{faqItems}</div>;
};

export default FAQSection;
