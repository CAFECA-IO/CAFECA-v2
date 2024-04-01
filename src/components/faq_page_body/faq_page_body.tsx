import React, {useState} from 'react';
import FAQSection from '../faq_section/faq_section';

const FAQPageBody = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <div className="flex flex-col w-full max-w-[1200px] max-md:max-w-full h-fit mt-20 mb-40">
        <div className="flex justify-center items-center px-16 text-center max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="text-xl tracking-wider leading-5 uppercase text-gray900 max-md:max-w-full">
              FAQ
            </div>
            <div className="mt-5 md:mt-2 md:text-4xl lg:text-6xl text-primaryPurple leading-[61.6px] max-md:max-w-full max-sm:text-3xl font-bold">
              What would you like to know?
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center px-16 mt-14 text-xl leading-7 text-gray900 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[960px]">
            <div className="flex flex-col justify-center text-base text-gray900 placeholder:text-gray300 whitespace-nowrap max-md:max-w-full">
              <div className="flex gap-5 justify-between px-8 py-4 mb-8 bg-white border border-solid border-gray900 rounded-[500px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="flex-1 outline-none bg-transparent"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#2F2F3E"
                    fillRule="evenodd"
                    d="M16.325 14.899l5.38 5.38a1.009 1.009 0 11-1.427 1.426l-5.38-5.38a8 8 0 111.426-1.426h.001zM10 16a6 6 0 100-12 6 6 0 000 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <FAQSection searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPageBody;
