import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Layout from "../components/layout/layout";

import myStyles from "../styles/hiring.module.css";
import HiringItems from "../components/hiring_items/hiring_items";

const hiringItems = [1, 2, 3, 4];

function HiringPage() {
  const { t } = useTranslation("common");

  const hiringList = hiringItems.map((item) => {
    return (
      <HiringItems
        key={t(`hiring.job${item}.name`)}
        name={t(`hiring.job${item}.name`)}
        detail1={t(`hiring.job${item}.detail1`)}
        detail2={t(`hiring.job${item}.detail2`)}
        detail3={t(`hiring.job${item}.detail3`)}
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
