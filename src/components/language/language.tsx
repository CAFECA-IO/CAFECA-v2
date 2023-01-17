import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { Cookies } from "react-cookie";

import myStyles from "../../styles/navbar.module.css";

function LanguageSwitch() {
  const router = useRouter();

  //選單收合
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langToggler = () => {
    setShowLangMenu(!showLangMenu);
  };

  const langStyles = showLangMenu
    ? myStyles.languageOpen
    : myStyles.languageClose;

  //讀取 cookie -> 讀取瀏覽器 -> 預設為 en
  const cookies = new Cookies();
  const currentLanguage =
    cookies.get("i18next") /* || navigator.language */ || "en";
  const switchLanguage = (lang: string) => {
    // to do
  };
  const setLanguage = (lang: string) => {
    cookies.set("i18next", lang);
    // toggleHandler();
    switchLanguage(lang);
  };
  switchLanguage(currentLanguage);

  //切換選單上的顯示
  const lang: string = router.locale === "en" ? "ENG" : "繁中";

  return (
    <li onClick={langToggler} className={langStyles}>
      {lang}
      <ul>
        <li>
          <Link
            href={router}
            scroll={false}
            locale="en"
            onClick={() => setLanguage("en")}
          >
            English
          </Link>
        </li>
        <li>
          <Link
            href={router}
            scroll={false}
            locale="tw"
            onClick={() => setLanguage("tw")}
          >
            繁體中文
          </Link>
        </li>
      </ul>
    </li>
  );
}
export default LanguageSwitch;
