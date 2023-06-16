import React from "react";
import Main from "../Home/Main";

export const OverLay = ({ children }) => {
  return (
    <div>
      {children}
      <Main />
    </div>
  );
};
