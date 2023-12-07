import React from "react";
import { Text } from "react-native";
import { sizes, lineHeights } from "./styles";

const Typography = ({
  text,
  size = "medium",
  lineHeight: height = "standard",
  boldText = false,
  containerStyle,
  ...props
}) => {
  const padding = sizes[size] || sizes.medium;
  const lineHeight = lineHeights[height] || lineHeights.standard;
  return (
    <Text
      style={{
        ...padding.text,
        fontWeight: boldText ? "700" : "400",
        ...lineHeight,
        ...containerStyle,
        ...props,
      }}
    >
      {text}
    </Text>
  );
};

export default Typography;
