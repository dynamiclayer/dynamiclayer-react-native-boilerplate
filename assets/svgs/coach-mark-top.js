import React from "react";
import { SvgXml } from "react-native-svg";

const CoachMarkDirTopSvg = () => {
  const svgs = `<svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Vector">
  <path id="Vector_2" d="M24.5 12L15.3284 2.82843C13.7663 1.26633 11.2337 1.26633 9.67157 2.82843L0.5 12L24.5 12Z" fill="black"/>
  </g>
  </svg>`;

  const Icon = () => <SvgXml xml={svgs} />;

  return <Icon />;
};

export default CoachMarkDirTopSvg;
