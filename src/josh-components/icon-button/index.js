import React from "react";
import { TouchableOpacity } from "react-native";
import { themeStyles, themeSizes } from "./styles";

const IconButton = ({ theme = "standard", icon: Icon, size, ...props }) => {
  const themeStyle = themeStyles[theme] || themeStyles.standard;
  const themeSize = themeSizes[size] || themeSizes.large;

  return (
    <TouchableOpacity
      style={{
        ...themeStyle.wrapper,
        ...themeSize.wrapper,
        ...props,
      }}
    >
      {Icon && <Icon />}
    </TouchableOpacity>
  );
};

export default IconButton;
