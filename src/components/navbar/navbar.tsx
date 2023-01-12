import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import myStyles from "../../styles/navbar.module.css";

function MainNavbar() {
  //collapse選單收合
  const [showMenu, setShowMenu] = useState(false);
  const navToggler = () => {
    setShowMenu(!showMenu);
  };
  const menuStyles = showMenu ? myStyles.openMenu : myStyles.closeMenu;
  const btnStyles = showMenu
    ? myStyles.menu_btn_cross
    : myStyles.menu_btn_burger;

  return (
    <nav className={myStyles.navbar}>
      <Link href="/#cafeca_main" scroll={false}>
        <Image
          src="/img/cafeca_logo.svg"
          alt="cafeca_logo"
          width={210}
          height={64}
        />
      </Link>

      <label onClick={navToggler} className={myStyles.menu_btn}>
        <div className={btnStyles}></div>
        <div className={btnStyles}></div>
        <div className={btnStyles}></div>
      </label>

      <div className={menuStyles}>
        <ul>
          <li>
            <Link href="/#contact_us" scroll={false}>
              CONTACT US
            </Link>
          </li>
          <li>
            <Link href="/about_us">ABOUT US</Link>
          </li>
          <li>
            <Link href="/hiring">JOIN US</Link>
          </li>
          <li>Language</li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNavbar;
