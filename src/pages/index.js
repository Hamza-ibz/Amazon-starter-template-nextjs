import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      {/* HEADER */}

      <Header/>

      <main className="max-w-screen-2xl mx-auto">
        {/* BANNER */}

        <Banner/>

        {/* PRODUCT FEED */}
      </main>
    </div>
  );
}
