import style from "./mynavbar.module.css";
import Logo from "../logo/logo";
import Menu from "../menu/menu";

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
