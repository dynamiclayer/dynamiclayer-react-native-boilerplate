import React from "react";
import { SvgXml } from "react-native-svg";

const CheckCircleSvg = () => {
  const svgs = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Filled/check-circle">
      <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
          d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM16.7071 9.70711C17.0976 9.31658 17.0976 8.68342 16.7071 8.29289C16.3166 7.90237 15.6834 7.90237 15.2929 8.29289L11 12.5858L8.70711 10.2929C8.31658 9.90237 7.68342 9.90237 7.29289 10.2929C6.90237 10.6834 6.90237 11.3166 7.29289 11.7071L10.2929 14.7071L11 15.4142L11.7071 14.7071L16.7071 9.70711Z"
          fill="#00B505" />
  </g>
</svg>`;

  const CheckCircle = () => <SvgXml xml={svgs} />;

  return <CheckCircle />;
};

export default CheckCircleSvg;
