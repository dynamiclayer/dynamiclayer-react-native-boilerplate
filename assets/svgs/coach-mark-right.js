import React from "react";
import { SvgXml } from "react-native-svg";

const CoachMarkDirRigthSvg = () => {
  const svgs = `<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Vector">
  <path id="Vector_2" d="M0 24L9.17157 14.8284C10.7337 13.2663 10.7337 10.7337 9.17157 9.17157L-1.04907e-06 0L0 24Z" fill="black"/>
  </g>
  </svg>`;

  const Icon = () => <SvgXml xml={svgs} />;

  return <Icon />;
};

export default CoachMarkDirRigthSvg;
