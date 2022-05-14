import React from "react";

interface Props {
  title: string;
}

const BlockChainApplication: React.FC<Props> = ({ title }) => {
  return (
    <div className="cursor-pointer border p-5 font-semibold transition hover:shadow-lg">
      {title}
    </div>
  );
};
export default BlockChainApplication;
