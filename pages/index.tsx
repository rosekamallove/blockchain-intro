import Head from "next/head"
import MastHead from "../components/masthead"

const IndexPage = () => {
  return (
    <div className="bg-slate-50 ">
      <Head>
        <title>BlockChain</title>
      </Head>
      <MastHead/>
    </div>
  )
}

export default IndexPage
