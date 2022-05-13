import React from "react";

const MastHead: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="z-10 flex-1 flex-col items-center justify-center p-12 text-center font-bold text-white drop-shadow-[0_3px_1px_rgba(0,0,0,0.2)]">
        {/* <Ripple/> */}
        <h1 className="mb-6 text-4xl xl:text-5xl">Blockchain</h1>
        <h2 className="mb-2  text-2xl tracking-tight xl:text-2xl">
          <span>An introduction to the decentralized web</span>
        </h2>
      </div>
    </div>
  );
};
export default MastHead;
