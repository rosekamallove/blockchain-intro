import Image from "next/image";
import React, { useContext, useRef } from "react";
import logo from "../public/images/bitcoin-brands-white.png";
import down from "../public/images/chevron-down-solid-white.png";
import { ScrollContext } from "./scroll-observer";

const MastHead: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY } = useContext(ScrollContext);
  console.log(scrollY);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center ">
      <video
        autoPlay
        playsInline
        muted
        loop
        className="absolute  h-full w-full object-cover"
        style={{ filter: "brightness(20%)" }}
      >
        <source src="/assets/block_chain.webm" type="video/webm; codecs=vp9" />
      </video>
      {/* <Ripple/> */}

      <div className={`flex-grow-0  pt-10 transition-opacity duration-1000`}>
        <Image src={logo} width={512 / 9} height={512 / 9} alt="logo" />
      </div>
      <div className="z-10 flex w-full  flex-1 flex-col items-center justify-center  p-12 text-center font-bold text-white drop-shadow-[0_3px_1px_rgba(0,0,0,0.2)]">
        <h1 className="mb-6 text-6xl xl:text-7xl">Blockchain</h1>
        <h2 className="mb-2  text-2xl tracking-tight xl:text-2xl">
          <span>An Introduction to The Decentralized Web</span>
        </h2>
      </div>
      <div className="flex-grow-0 pb-20 transition-all duration-1000 md:pb-10">
        <Image src={down} width={448 / 9} height={512 / 9} alt="scroll down" />
      </div>
    </div>
  );
};
export default MastHead;
