// Install necessary packages before using this component:
// npm install react-icons

import {useState} from 'react';
import {IoIosArrowDown} from 'react-icons/io';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({question, answer}: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col justify-center p-4 mt-4 bg-white shadow-2xl max-md:max-w-full">
      {' '}
      <button
        className="flex justify-between gap-5 items-center w-full py-5 px-6 text-left"
        onClick={toggle}
      >
        <span className="text-base lg:text-xl font-bold text-black">{question}</span>
        <div
          className={`text-base lg:text-xl transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            fill="none"
            viewBox="0 0 24 25"
          >
            <path
              fill="#2F2F3E"
              d="M21.537 7.165a1.5 1.5 0 00-2.121 0L11.99 14.59 4.566 7.165a1.5 1.5 0 00-2.121 2.12l8.485 8.486a1.5 1.5 0 002.121 0l8.486-8.485a1.5 1.5 0 000-2.121z"
            ></path>
          </svg>
        </div>
      </button>
      <div
        className={`lg:text-base text-sm overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}
      >
        <div className="pb-5 px-6">
          <p className="text-gray900 font-normal">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
