import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/layout/layout";

import myStyles from "../styles/hiring.module.css";
import HiringItems from "../components/hiring_items/hiring_items";
import contents from "../../contents.json";

const jobList = contents;

function HiringPage() {
  const { t } = useTranslation("common");

  const hiringList = jobList.map((item) => {
    return (
      <HiringItems
        key={item.name}
        name={item.name}
        details={item.details}
        descriptions={item.descriptions}
        requirements={item.requirements}
      />
    );
  });

  return (
    <main>
      <Layout>
        <div className={myStyles.container}>
          <h2>{t("hiring.title")}</h2>
          {hiringList}
        </div>
      </Layout>
    </main>
  );
}
export default HiringPage;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}
