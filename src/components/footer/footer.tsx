import Link from "next/link";
import Image from "next/image";

function Footer() {
  const VERSION = "v2.0";

  return (
    <footer>
      <Link href="/">
        <Image
          src="/img/cafeca_logo_mono.svg"
          alt="cafeca_logo"
          width={210}
          height={64}
        />
      </Link>
      <div>
        <p>Copyright © 2022 CAFECA. All rights reserved.</p>
        <p>{VERSION}</p>
      </div>
    </footer>
  );
}
export default Footer;
