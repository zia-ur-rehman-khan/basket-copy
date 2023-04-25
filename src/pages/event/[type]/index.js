import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() => import("components/pages/Event"));

export default function Event({ params }) {
  return <DynamicHeader query={params} />;
}

export async function getStaticPaths() {
  const dynamicPath = ["school", "academy", "community", "birthday", "camps"];
  const paths = dynamicPath.map((path) => ({
    params: { type: path },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      params,
    },
  };
}
