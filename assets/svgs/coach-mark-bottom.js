import React from "react";
import { SvgXml } from "react-native-svg";

const CoachMarkDirBottomSvg = () => {
  const svgs = `<svg width="25" height="12" viewBox="0 0 25 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Vector">
  <path id="Vector_2" d="M0.5 0L9.67157 9.17157C11.2337 10.7337 13.7663 10.7337 15.3284 9.17157L24.5 0L0.5 0Z" fill="black"/>
  </g>
  </svg>`;

  const Icon = () => <SvgXml xml={svgs} />;

  return <Icon />;
};

export default CoachMarkDirBottomSvg;
