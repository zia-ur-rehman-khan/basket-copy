import Layout from "components/layout";
import Head from "next/head";
import "styles/index.less";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Iball</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
