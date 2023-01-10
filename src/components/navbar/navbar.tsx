import Image from "next/image";
import Link from "next/link";

function MainNavbar() {
  return (
    <nav>
      <Link href="/">
        <Image
          src="/img/cafeca_logo.svg"
          alt="cafeca_logo"
          width={210}
          height={64}
        />
      </Link>
      <ul>
        <li>Contact Us</li>
        <li>Join Us</li>
        <li>Language</li>
      </ul>
    </nav>
  );
}

export default MainNavbar;
