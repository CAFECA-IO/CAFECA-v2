import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";

import myStyles from "../../styles/navbar.module.css";
import LanguageSwitch from "../language/language";

function MainNavbar() {
  const { t } = useTranslation("common");

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
          <li className={myStyles.navbarItem}>
            <Link href="/#contact_us" scroll={false} onClick={navToggler}>
              {t("nav.contact")}
            </Link>
          </li>
          <li className={myStyles.navbarItem}>
            <Link href="/about_us" onClick={navToggler}>
              {t("nav.about")}
            </Link>
          </li>
          <li className={myStyles.navbarItem}>
            <Link href="/hiring" onClick={navToggler}>
              {t("nav.join")}
            </Link>
          </li>

          <LanguageSwitch />
        </ul>
      </div>
    </nav>
  );
}

export default MainNavbar;
