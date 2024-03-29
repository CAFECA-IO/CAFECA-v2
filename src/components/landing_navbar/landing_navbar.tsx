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
            src="/logos/logo.svg"
            className="shrink-0 my-auto max-w-full aspect-[3.33] w-[120px]"
          />
        </Link>

        {/* Info: mobile (logo and hamburger) (20240328 - Shirley) */}
        <div className="lg:hidden flex w-full justify-between items-center">
          <Link href={CAFECA_URL.HOME} className="items-center flex justify-center">
            <img
              loading="lazy"
              src="/logos/logo.svg"
              className="shrink-0 my-auto max-w-full aspect-[3.33] w-[120px]"
            />
          </Link>
          <button className="flex lg:hidden hover:opacity-80">
            <RxHamburgerMenu onClick={handleMenuOpen} size={30} />
          </button>
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
        </div>
      </div>
    </div>
  );
};

export default LandingNavbar;
