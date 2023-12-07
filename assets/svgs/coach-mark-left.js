import React from "react";
import { SvgXml } from "react-native-svg";

const CoachMarkDirLeftSvg = () => {
  const svgs = `<svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Vector">
  <path id="Vector_2" d="M12 0L2.82843 9.17157C1.26633 10.7337 1.26633 13.2663 2.82843 14.8284L12 24L12 0Z" fill="black"/>
  </g>
  </svg>`;

  const Icon = () => <SvgXml xml={svgs} />;

  return <Icon />;
};

export default CoachMarkDirLeftSvg;
