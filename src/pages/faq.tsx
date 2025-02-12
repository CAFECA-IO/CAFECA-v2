import {serverSideTranslations} from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import {ILocale} from '../interfaces/locale';
import LandingNavbar from '../components/landing_navbar/landing_navbar';
import LandingFooter from '../components/landing_footer/landing_footer';
import FAQPageBody from '../components/faq_page_body/faq_page_body';
import {FAVICON} from '../constants/display';

export default function FAQ() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={FAVICON} />
        <title>FAQ - CAFECA</title>
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
          <FAQPageBody />
        </main>
        <LandingFooter />
      </div>
    </>
  );
}

const getStaticPropsFunction = async ({locale}: ILocale) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export const getStaticProps = getStaticPropsFunction;
