import React from "react";
import { TileBackground, TileContent, TileWrapper } from "./tile";

const Details: React.FC = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground></TileBackground>
      <TileContent>Foo</TileContent>
      <TileContent>Bar</TileContent>
      <TileContent>FOOO</TileContent>
    </TileWrapper>
  );
};

export default Details;
