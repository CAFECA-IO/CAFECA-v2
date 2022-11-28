import style from "./mynavbar.module.css";
import Logo from "../logo/logo";
import Menu from "../menu/menu";

function Mynavbar() {
  return (
    <header className={style.header}>
      <nav>
        <ul>
          <div className={style.logo}>
            <Logo />
          </div>
          <li>
            <Menu />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Mynavbar;
