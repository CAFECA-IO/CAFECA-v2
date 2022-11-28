import { Link } from "react-router-dom";
import style from "./footer.module.css";

function Footer() {
  return (
    <>
      <div className={style.footer}>
        <Link to="/" className={style.logo}>
          <img src="./cafeca/cafeca_logo_mono.svg" alt="CAFECA" />
        </Link>
        <div className={style.copyright}>
          Copyright © 2022 CAFECA. All rights reserved. v2.0
        </div>
      </div>
    </>
  );
}
export default Footer;
