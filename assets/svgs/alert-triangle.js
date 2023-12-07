import React from "react";
import { SvgXml } from "react-native-svg";

const AlertTriangleSvg = () => {
  const svgs = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Filled/alert-triangle">
      <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
          d="M10.2675 3C11.0373 1.66667 12.9618 1.66667 13.7316 3L20.6598 15C21.4296 16.3333 20.4673 18 18.9277 18H5.07134C3.53174 18 2.56949 16.3333 3.33929 15L10.2675 3ZM11.9995 7C12.5518 7 12.9995 7.44771 12.9995 8V11C12.9995 11.5523 12.5518 12 11.9995 12C11.4473 12 10.9995 11.5523 10.9995 11V8C10.9995 7.44771 11.4473 7 11.9995 7ZM12.9995 14C12.9995 13.4477 12.5518 13 11.9995 13C11.4473 13 10.9995 13.4477 10.9995 14V15C10.9995 15.5523 11.4473 16 11.9995 16C12.5518 16 12.9995 15.5523 12.9995 15V14Z"
          fill="#FFD600" />
  </g>
</svg>`;

  const AlertTriangle = () => <SvgXml xml={svgs} />;

  return <AlertTriangle />;
};

export default AlertTriangleSvg;
