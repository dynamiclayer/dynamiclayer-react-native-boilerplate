import React from "react";
import { SvgXml } from "react-native-svg";

const RightArrowSVG = () => {
  const svgs = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Iconset/chevron-right">
  <path id="Vector" d="M9 18L15 12L9 6" stroke="black" stroke-width="2" stroke-linecap="round"/>
  </g>
  </svg>`;

  const RightArrow = () => <SvgXml xml={svgs} />;

  return <RightArrow />;
};

export default RightArrowSVG;
