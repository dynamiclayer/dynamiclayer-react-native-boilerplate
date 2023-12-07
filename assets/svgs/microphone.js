import React from "react";
import { SvgXml } from "react-native-svg";

const MicroPhoneSvg = () => {
  const svgs = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Outline/microphone">
      <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
          d="M8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7V11C16 13.2091 14.2091 15 12 15C9.79086 15 8 13.2091 8 11V7ZM12 5C10.8954 5 10 5.89543 10 7V11C10 12.1046 10.8954 13 12 13C13.1046 13 14 12.1046 14 11V7C14 5.89543 13.1046 5 12 5ZM6 8C6.55228 8 7 8.44772 7 9V11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11V9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9V11C19 14.5265 16.3923 17.4439 13 17.9291V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V17.9291C7.60771 17.4439 5 14.5265 5 11V9C5 8.44772 5.44772 8 6 8Z"
          fill="#757575" />
  </g>
</svg>`;

  const MicroPhone = () => <SvgXml xml={svgs} />;

  return <MicroPhone />;
};

export default MicroPhoneSvg;
