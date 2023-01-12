import Image from "next/image";
import { Inter } from "@next/font/google";
import myStyles from "../styles/homePage.module.css";

import Layout from "../components/layout/layout";
import ContactUsForm from "../components/contactUsForm/contactUsForm";
//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={myStyles.masterContainer}>
      <Layout>
        <div className={myStyles.container}>
          <div id="cafeca_main" className={myStyles.walletText}>
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
          <div id="contact_us">
            <ContactUsForm />
          </div>
        </div>
      </Layout>
    </main>
  );
}
