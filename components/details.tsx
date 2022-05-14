import React from "react";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";

const Details: React.FC = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground></TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <span className="text-9xl">Foo{progress}</span>
          )}
        />
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <span className="text-9xl">Bar{progress}</span>
          )}
        />
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <span className="text-9xl">Bar2{progress}</span>
          )}
        />
      </TileContent>
    </TileWrapper>
  );
};

export default Details;
