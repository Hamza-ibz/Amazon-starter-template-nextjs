import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home({products}) {
  return (
    <div className="bg-grey-100">
      {/* {console.log(products)} */}
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* HEADER */}

      <Header/>

      <main className="max-w-screen-2xl mx-auto">
        {/* BANNER */}

        <Banner/>

        {/* PRODUCT FEED */}

        <ProductFeed products = {products} />
        
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://fakestoreapi.com/products")
  const products = await res.json()



  return {
    props: {products }, // will be passed to the page component as props
  }
}

// export async function GetServerSideProps(context){
//   const products = await fetch("https://fakestoreapi.com/products").then(
//     (res) => res.json()
    
//   );

//   return{

//     props:{
//       products,
//     }
//   };
// }

// export async function getServerSideProps(context) {
//   return {
//     props: { products: `Next.js is awesome` }, // will be passed to the page component as props
//   }
// }




