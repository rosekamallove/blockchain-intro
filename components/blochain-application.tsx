import React from "react";

interface Props {
  title: string;
}

const BlockChainApplication: React.FC<Props> = ({ title }) => {
  return (
    <div className="border p-5 transition hover:shadow-lg">
      <strong>{title}</strong>
    </div>
  );
};
export default BlockChainApplication;
