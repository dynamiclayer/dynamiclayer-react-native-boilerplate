import React from "react";
import { SvgXml } from "react-native-svg";

const SearchSvg = () => {
  const svgs = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Outline/search">
      <path id="Vector" fill-rule="evenodd" clip-rule="evenodd"
          d="M4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.8487 18 13.551 17.3729 14.9056 16.3199L19.2929 20.7071C19.6834 21.0976 20.3166 21.0976 20.7071 20.7071C21.0976 20.3166 21.0976 19.6834 20.7071 19.2929L16.3199 14.9056C17.3729 13.551 18 11.8487 18 10C18 5.58172 14.4183 2 10 2Z"
          fill="#757575" />
  </g>
</svg>`;

  const Search = () => <SvgXml xml={svgs} />;

  return <Search />;
};

export default SearchSvg;
