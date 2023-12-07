import React from "react";
import { SvgXml } from "react-native-svg";

const SingleDotSvg = ({ width, height, color = "white" }) => {
  const svgs = `<svg width="${width ? width : 24}" height="${
    height ? height : 24
  }" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Iconset/placeholder">
  <circle id="Vector" cx="8.49967" cy="7.99998" r="2.66667" fill="${
    color && color
  }"/>
  </g>
  </svg>`;

  const SingleDot = () => <SvgXml xml={svgs} />;

  return <SingleDot />;
};

export default SingleDotSvg;
