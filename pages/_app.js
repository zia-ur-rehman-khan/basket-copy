import Layout from "components/layout";
import "../styles/globals.scss";
import "../styles/antd.less"; // Add this line

import { Button } from "antd";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Button type="primary">Primary Button</Button>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
