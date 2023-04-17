import dynamic from "next/dynamic";

const DynamicHeader = dynamic(() =>
  import("components/pages/Shop")
);
// import ProductCard from 'components/pages/Shop/ProductCard'


const shop = () => {
  return (
   <>
   <DynamicHeader/>
   </>
  )
}

export default shop