import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductFeed from "../components/ProductFeed";

export default function Home() {
  return (
    <div className="bg-grey-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* HEADER */}

      <Header/>

      <main className="max-w-screen-2xl mx-auto">
        {/* BANNER */}

        <Banner/>

        {/* PRODUCT FEED */}

        <ProductFeed/>
      </main>
    </div>
  );
}
