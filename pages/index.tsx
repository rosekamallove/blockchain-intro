import Head from "next/head"
import AboutUs from "../components/aboutus"
import MastHead from "../components/masthead"

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>BlockChain</title>
      </Head>
      <MastHead/>
      <AboutUs/>
    </div>
  )
}

export default IndexPage
