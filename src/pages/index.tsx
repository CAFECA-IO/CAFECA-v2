import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import myStyles from "../styles/index.module.css";

import MainNavbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.masterContainer}>
      <MainNavbar />
      <div className={styles.container}>
        <div className={styles.walletText}>
          <h2>THE NEXT GENERATION WALLET</h2>
          <Image
            src="/img/cafeca.svg"
            alt="cafeca_logo"
            width={170}
            height={40}
          />
          <p>
            Combine wallets, keys and ID in one card. Explore the infinity in
            the future.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
