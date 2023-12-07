import React from "react";
import { SvgXml } from "react-native-svg";

const IndicatorSvg = () => {
  const svgs = `<svg width="41" height="5" viewBox="0 0 41 5" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.5" width="40" height="5" rx="2.5" fill="#E2E2E2"/>
  </svg>`;

  const Indicator = () => <SvgXml xml={svgs} />;

  return <Indicator />;
};

export default IndicatorSvg;
