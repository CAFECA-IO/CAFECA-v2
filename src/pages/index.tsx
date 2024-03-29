// import Image from "next/image";
import {useTranslation} from 'next-i18next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import {ILocale} from '../interfaces/locale';
import LandingNavbar from '../components/landing_navbar/landing_navbar';
import LandingPageBody from '../components/landing_page_body/landing_page_body';
import LandingFooter from '../components/landing_footer/landing_footer';
//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>CAFECA</title>
        <meta
          name="description"
          // TODO: Add a proper description (20240327 - Shirley)
          content="Redefining Identity: Empowering You as the Sole Owner of Your Identity"
        />
        <meta name="author" content="CAFECA" />
        <meta name="keywords" content="區塊鏈,數位身分" />

        <meta property="og:title" content="CAFECA" />
        <meta
          property="og:description"
          // TODO: Add a proper description (20240327 - Shirley)
          content="Redefining Identity: Empowering You as the Sole Owner of Your Identity"
        />
      </Head>

      <div className="font-jost">
        <nav>
          <LandingNavbar />
        </nav>

        <main>
          <LandingPageBody />
        </main>
        <LandingFooter />
      </div>
    </>
  );
}

// export async function getStaticProps({ locale }: any) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common"])),
//       // Will be passed to the page component as props
//     },
//   };
// }

const getStaticPropsFunction = async ({locale}: ILocale) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export const getStaticProps = getStaticPropsFunction;
