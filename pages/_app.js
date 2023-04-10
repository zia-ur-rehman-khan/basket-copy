import Layout from "components/layout";
import "../styles/index.less";

import { Button } from "antd";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
