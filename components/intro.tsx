import React from "react";
import BlockChainApplication from "./blochain-application";

const Intro: React.FC = () => {
  return (
    <section className={`flex flex-col bg-white py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <h2 className="mx-auto mb-6 max-w-5xl text-7xl font-bold xl:text-8xl">
          What Is a Blockchain?
        </h2>
        <p className="mx-auto my-5 max-w-5xl text-2xl leading-tight">
          <strong>
            A blockchain is a distributed database that is shared among the
            nodes of a computer network.
          </strong>{" "}
          As a database, a blockchain stores information electronically in
          digital format. Blockchains are best known for their crucial role in
          cryptocurrency systems, such as{" "}
          <a href="https://www.investopedia.com/terms/b/bitcoin.asp">Bitcoin</a>
          , for maintaining a secure and decentralized record of transactions.
          The innovation with a blockchain is that it guarantees the fidelity
          and security of a record of data and generates trust without the need
          for a trusted third party.
        </p>
        <p className="mx-auto my-5 max-w-5xl text-2xl leading-tight">
          One key difference between a typical database and a blockchain is how
          the data is structured. A blockchain collects information together in
          groups, known as{" "}
          <a href="https://www.investopedia.com/terms/b/block-bitcoin-block.asp">
            blocks
          </a>
          , that hold sets of information. Blocks have certain storage
          capacities and, when filled, are closed and linked to the previously
          filled block, forming a chain of data known as the blockchain. All new
          information that follows that freshly added block is compiled into a
          newly formed block that will then also be added to the chain once
          filled.
        </p>
      </div>
      <div className="container mx-auto mt-28 px-11 text-center">
        <h2 className="text-4xl font-bold md:text-5xl">
          Blockchain Applications
        </h2>
        <div className="md:grid-col-3 mt-10 grid grid-cols-2 gap-6 text-3xl lg:grid-cols-4 lg:gap-20 ">
          <BlockChainApplication title={"Money Transfer"} />
          <BlockChainApplication title={"Financial Exchange"} />
          <BlockChainApplication title={"Lending"} />
          <BlockChainApplication title={"Insurance"} />
          <BlockChainApplication title={"Real Estate"} />
          <BlockChainApplication title={"Voting"} />
          <BlockChainApplication title={"Artist Royalties"} />
          <BlockChainApplication title={"NFTs"} />
          <BlockChainApplication title={"Logistics Tracking"} />
          <BlockChainApplication title={"Secure IoT"} />
        </div>
      </div>
    </section>
  );
};

export default Intro;
