import style from "./Mynavbar.module.css";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";

function Mynavbar() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <Logo />
      </div>
      <div>
        <Menu />
      </div>
    </header>
  );
}

export default Mynavbar;
