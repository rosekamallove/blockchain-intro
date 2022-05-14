import React from "react";
import { DetailBackground, DetailContainer } from "./detail";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";

const Details: React.FC = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <DetailBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <DetailContainer>
              <span className="text-9xl">Foo{progress}</span>
            </DetailContainer>
          )}
        />
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <span className="text-9xl">Bar{progress}</span>
          )}
        />
      </TileContent>
    </TileWrapper>
  );
};

export default Details;
