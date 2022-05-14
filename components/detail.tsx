import React from "react";

export const DetailContainer: React.FC = ({ children }) => (
  <div className="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2">
    {children}
  </div>
);

export const DetailBackground: React.FC = () => (
  <div className="sticky top-0 grid min-h-screen w-full  grid-cols-1 lg:grid-cols-2 ">
    <div className="h-[30-vh] bg-black lg:h-auto"></div>
    <div className="h-[7-vh] bg-white lg:min-h-screen"></div>
  </div>
);
