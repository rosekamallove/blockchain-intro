import Head from "next/head";
import Intro from "../components/intro";
import MastHead from "../components/masthead";
import Stats from "../components/stats";

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>BlockChain</title>
      </Head>
      <MastHead />
      <Intro />
      <Stats />
    </div>
  );
};

export default IndexPage;
