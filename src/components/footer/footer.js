import { Link } from "react-router-dom";
import style from "./footer.module.css";
import Version from "../version/version";

function Footer() {
  return (
    <>
      <div className={style.footer}>
        <Link to="/" className={style.logo}>
          <img src="./cafeca/cafeca_logo_mono.svg" alt="CAFECA" />
        </Link>
        <div className={style.copyright}>
          Copyright © 2022 CAFECA. All rights reserved.
          <Version />
        </div>
      </div>
    </>
  );
}
export default Footer;
