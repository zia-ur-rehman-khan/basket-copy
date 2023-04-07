import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.scss";
import Layout from "components/layout";
import { Button } from "antd";
import banner from "public/layout/image/banner.png";

export default function Home() {
  return (
    <div>
      <Image
        src={banner}
        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        alt="logo"
      />
    </div>
  );
}
