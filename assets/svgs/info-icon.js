import React from "react";
import { SvgXml } from "react-native-svg";

const InfoCircleSvg = () => {
  const svgs = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 17C11.4477 17 11 16.5523 11 16V12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17ZM11 9C11 9.55228 11.4477 10 12 10C12.5523 10 13 9.55228 13 9V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V9Z" fill="#7E49FF"/>
</svg>`;

  const Icon = () => <SvgXml xml={svgs} />;

  return <Icon />;
};

export default InfoCircleSvg;
