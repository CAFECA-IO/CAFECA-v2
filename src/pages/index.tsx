import Image from "next/image";
import { Inter } from "@next/font/google";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import myStyles from "../styles/home_page.module.css";

import Layout from "../components/layout/layout";
import ContactUsForm from "../components/contact_us_form/contact_us_form";
//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { t } = useTranslation("common");

  return (
    <main>
      <Layout>
        <div className={myStyles.container}>
          <div id="cafeca_main" className={myStyles.walletText}>
            <h2>{t("main.title")}</h2>
            <Image
              src="/img/cafeca.svg"
              alt="cafeca_logo"
              width={170}
              height={40}
            />
            <p>{t("main.description")}</p>
          </div>
          <div id="contact_us">
            <ContactUsForm />
          </div>
        </div>
      </Layout>
    </main>
  );
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
