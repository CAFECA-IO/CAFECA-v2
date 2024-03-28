import Link from 'next/link';
import {useState} from 'react';
import {CAFECA_URL} from '../../constants/config';
import {RxHamburgerMenu} from 'react-icons/rx';

const LandingNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex gap-5 justify-between px-20 py-4 w-full text-lg font-bold leading-6 text-gray600 bg-gray100 flex-col lg:flex-row max-md:px-5 max-md:max-w-full">
        {/* Info: desktop (logo and navlinks) (20240328 - Shirley) */}
        <Link href={CAFECA_URL.HOME} className="items-center lg:flex justify-center hidden">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ca1b7d504f5034aa6c0db2e3c0c99d2fb8f83ced88499c057df393734137e4?apiKey=0e17b0b875f041659e186639705112b1&"
            className="shrink-0 my-auto max-w-full aspect-[3.33] w-[120px]"
          />
        </Link>

        {/* Info: mobile (logo and hamburger) (20240328 - Shirley) */}
        <div className="lg:hidden flex w-full justify-between items-center">
          <Link href={CAFECA_URL.HOME} className="items-center flex justify-center">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f2ca1b7d504f5034aa6c0db2e3c0c99d2fb8f83ced88499c057df393734137e4?apiKey=0e17b0b875f041659e186639705112b1&"
              className="shrink-0 my-auto max-w-full aspect-[3.33] w-[120px]"
            />
          </Link>
          <div className="flex lg:hidden">
            <RxHamburgerMenu onClick={handleMenuOpen} size={30} />
          </div>
        </div>

        <div
          className={`${isMenuOpen ? `flex` : `hidden`} gap-0 max-md:flex-wrap lg:flex-row flex-col lg:flex`}
          onClick={handleMenuOpen}
        >
          <Link href={CAFECA_URL.COMING_SOON}>
            <div className="justify-center px-9 py-5 whitespace-nowrap rounded-xl max-md:px-5 hover:text-gray600/70 text-center">
              Apply
            </div>
          </Link>
          <Link href={CAFECA_URL.COMING_SOON}>
            <div className="justify-center px-9 py-5 rounded-xl max-md:px-5 hover:text-gray600/70 text-center">
              My Order
            </div>
          </Link>
          <Link href={CAFECA_URL.FAQ}>
            <div className="justify-center px-9 py-5 whitespace-nowrap rounded-xl max-md:px-5 hover:text-gray600/70 text-center">
              FAQ
            </div>
          </Link>
          {/* <Link href="#contact-us"> */}
          <Link href={CAFECA_URL.CONTACT_US}>
            <div className="justify-center px-9 py-5 rounded-xl max-md:px-5 hover:text-gray600/70 text-center">
              Contact Us
            </div>
          </Link>

          {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8f5663ae0161b9ee6feedc8cad881acde56a2c14a708df2de4d4d0d984dc9959?apiKey=0e17b0b875f041659e186639705112b1&"
            className="shrink-0 aspect-square w-[60px] mx-auto"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default LandingNavbar;
