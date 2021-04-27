import React, { useContext } from "react";
import {Gettheme} from "./ThemeContextProvider"
function B() {
          const {color,handleClick}=Gettheme();
  return (
    <div>
    <button onClick={handleClick}>click</button>
    <div style={{ color: color? "green" : "red" }}>
      function component
    </div>
    </div>
  );
}
export default B;
