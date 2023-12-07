import React from "react";
import { SvgXml } from "react-native-svg";

const UserSvg = () => {
  const svgs = `<svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="Filled/user">
    <path
      id="Vector"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12ZM4 19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V16.5457C20 16.2056 19.8277 15.8893 19.5352 15.7158C18.2742 14.9674 14.7021 13 12 13C9.29792 13 5.72577 14.9674 4.4648 15.7158C4.17228 15.8893 4 16.2056 4 16.5457V19Z"
      fill="black"
    />
  </g>
</svg>`;

  const User = () => <SvgXml xml={svgs} />;

  return <User />;
};

export default UserSvg;
