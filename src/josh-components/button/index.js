//

import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles, sizes, radiusList } from "./styles";

const Button = ({
  children,
  title,
  theme = "standard",
  size = "standard",
  radius = "standard",
  leftIcon: Icon,
  rightIcon: RightIcon,
  containerStyles,
  ...props
}) => {
  const style = styles[theme] || styles.standard;
  const padding = sizes[size] || sizes.standard;
  const borderRadius = radiusList[radius] || radiusList.standard;
  const colorList = {
    standard: "#FFFFFF",
    secondary: "#7E49FF",
    light: "#000000",
    offlight: "#7E49FF",
  };

  const iconColor = colorList[theme];

  return (
    <TouchableOpacity
      style={{ ...style.wrapper, padding, borderRadius, ...containerStyles }}
      {...props}
    >
      {children ? (
        children
      ) : (
        <>
          {Icon && <Icon color={iconColor} />}
          <Text style={style.title}>{title}</Text>
          {RightIcon && <RightIcon color={iconColor} />}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
