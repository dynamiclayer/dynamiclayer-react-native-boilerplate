import React from "react";
import { SvgXml } from "react-native-svg";

const PaginationDotSvg = ({ color = "black", opacity = "0.4" }) => {
  const svgs = `<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle id="Vector" opacity=${
    opacity ? opacity : "0.4"
  } cx="4" cy="4" r="4" fill=${color ? color : "black"}/>
  </svg>
  `;

  const PaginationDot = () => <SvgXml xml={svgs} />;

  return <PaginationDot />;
};

export default PaginationDotSvg;
