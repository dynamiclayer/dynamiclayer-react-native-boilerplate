/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { SvgXml } from "react-native-svg";

const InformationSvg = () => {
  const svgs = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Outline/information">
  <path id="Vector" fill-rule="evenodd" clip-rule="evenodd" d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 10C11.4477 10 11 9.55228 11 9V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V9C13 9.55228 12.5523 10 12 10ZM12 17C11.4477 17 11 16.5523 11 16V12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17Z" fill="#757575"/>
  </g>
  </svg>
  `;

  const Information = () => <SvgXml xml={svgs} />;

  return <Information />;
};

export default InformationSvg;
