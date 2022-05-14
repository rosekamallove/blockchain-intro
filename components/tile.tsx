import React, { useContext, useRef } from "react";
import { ScrollContext } from "./scroll-observer";

interface WrapperProps {
  numOfPages: number;
}

interface TileContextValue {
  numOfPages: number;
  currentPage: number;
}

export const TileContext = React.createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0,
});

export const TileWrapper: React.FC<WrapperProps> = ({
  children,
  numOfPages,
}) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const { current: elContainer } = refContainer;

  let currentPage = 0;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH
      ) / clientHeight;
    currentPage = percentY * numOfPages;
  }
  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div ref={refContainer} className="relative bg-black text-white">
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground: React.FC = ({ children }) => {
  return <div className="absolute h-full w-full">{children}</div>;
};

export const TileContent: React.FC = ({ children }) => {
  return (
    <div className="sticky top-0 h-screen overflow-hidden">{children}</div>
  );
};
