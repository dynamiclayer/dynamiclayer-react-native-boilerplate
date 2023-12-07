import React from "react";
import { Image, Text, View } from "react-native";
import { themeStyles } from "./styles";

const Avatar = ({
  status,
  size = "large",
  userImage: UserImage,
  icon: Icon,
  number,
  ...props
}) => {
  const themeStyle = themeStyles[size] || themeStyles.large;

  const StatusColors = {
    online: "#00DD00",
    offline: "#E2E2E2",
    away: "#ffb404",
  };

  return (
    <View
      style={{
        ...themeStyle.wrapper,
        ...props,
      }}
    >
      {UserImage && <UserImage />}
      {status && (
        <View
          style={{
            ...themeStyle.icon,
            backgroundColor: StatusColors[status] || "#E2E2E2",
          }}
        >
          {number ? (
            <Text
              style={{
                ...themeStyle.status,
              }}
            >
              {number}
            </Text>
          ) : Icon ? (
            <Icon />
          ) : null}
        </View>
      )}
    </View>
  );
};

export default Avatar;
