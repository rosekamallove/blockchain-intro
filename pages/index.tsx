import Head from "next/head"
import Intro from "../components/intro"
import MastHead from "../components/masthead"

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>BlockChain</title>
      </Head>
      <MastHead/>
      <Intro/>
    </div>
  )
}

export default IndexPage
