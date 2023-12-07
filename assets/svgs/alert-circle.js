import React from "react";
import { SvgXml } from "react-native-svg";

const AlertCircleSvg = () => {
  const svgs = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Filled/alert-circle">
      <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
          d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 7C12.5523 7 13 7.44772 13 8V11C13 11.5523 12.5523 12 12 12C11.4477 12 11 11.5523 11 11V8C11 7.44772 11.4477 7 12 7ZM13 14C13 13.4477 12.5523 13 12 13C11.4477 13 11 13.4477 11 14V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V14Z"
          fill="#FF2C20" />
  </g>
</svg>`;

  const AlertCircle = () => <SvgXml xml={svgs} />;

  return <AlertCircle />;
};

export default AlertCircleSvg;
