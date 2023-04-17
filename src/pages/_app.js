import Layout from "components/layout";
import "styles/index.less";
import "styles/globals.less";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
