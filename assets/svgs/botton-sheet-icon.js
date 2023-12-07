import React from "react";
import { SvgXml } from "react-native-svg";

const BottomSheetIcon = () => {
  const svgs = `<svg xmlns="http://www.w3.org/2000/svg" width="241" height="240" viewBox="0 0 241 240" fill="none">
  <circle cx="120.5" cy="120" r="100" fill="#7E49FF"/>
  <path d="M50.5 120L190.5 120" stroke="black" stroke-width="4" stroke-linecap="round"/>
  <path d="M120.5 50L120.5 190" stroke="black" stroke-width="4" stroke-linecap="round"/>
</svg>`;

  const Icon = () => <SvgXml xml={svgs} />;

  return <Icon />;
};

export default BottomSheetIcon;
