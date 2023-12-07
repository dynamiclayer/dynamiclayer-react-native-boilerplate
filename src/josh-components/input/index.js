/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Text, TextInput, View } from "react-native";
import { themeStyles } from "./styles";

const Input = ({
  lable,
  name,
  value = "",
  onChangeText,
  placeholder = "",
  size = "medium", // large/small/medium
  error,
  disable = false, // true/false default is false
  backgroundColor,
  border = true, // true/false default is true
  leftIcon: LeftIcon, // optional
  rightIcon: RightIcon, // optional
  isSearch,
}) => {
  const [fontSize, setFontSize] = useState(value ? 12 : 16);
  const [focus, setFocus] = useState(false);
  const [position, setPosition] = useState(
    value
      ? size === "large"
        ? 6
        : size === "small"
        ? 0
        : 4
      : size === "large"
      ? 16
      : size === "small"
      ? 8
      : 12
  );
  const [inputValue, setInputValue] = useState({ [name]: value });
  const themeStyle = themeStyles[size] || themeStyles.medium;

  const animatedHeaderTextSize = useAnimatedStyle(() => ({
    fontSize: withTiming(fontSize, { duration: 500 }),
    position: "absolute",
    top: withTiming(position, { duration: 500 }),
    left: LeftIcon ? 48 : 16,
    color: error ? "#FF2C20" : disable ? "#CBCBCB" : "#757575",
  }));

  const handleInput = (value) => {
    setInputValue({ ...inputValue, [value.name]: value.text });
    onChangeText(value);
    if (value.text === "") {
      setFocus(true);
    } else {
      setFocus(false);
    }
  };

  const onFocusAction = async () => {
    setFocus(true);
    if (size === "small") {
      setPosition(0);
    } else if (size === "large") {
      setPosition(6);
    } else {
      setPosition(4);
    }
    setFontSize(12);
  };
  const onBlurAction = async () => {
    setFocus(false);
    if (inputValue[name] === "") {
      setFontSize(16);
    }
    if (inputValue[name] === "") {
      if (size === "large") {
        setPosition(16);
      } else if (size === "small") {
        setPosition(8);
      } else {
        setPosition(12);
      }
    }
  };

  const WrapperBgColor = backgroundColor
    ? backgroundColor
    : isSearch
    ? focus
      ? "#E2E2E2"
      : "#F6F6F6"
    : "#fff";

  const MainWrapperStyle = {
    ...themeStyle.wrapper,
    backgroundColor: WrapperBgColor,
    borderWidth: border ? 1 : 0,
    justifyContent: !lable ? "center" : null,
  };

  let InputWrapperStyle = {
    ...themeStyle.textContainer,
    paddingHorizontal: 24,
  };

  let InputStyle = {
    fontSize: 16,
    width: "100%",
    position: "relative",
    left: LeftIcon && RightIcon ? 24 : LeftIcon ? 16 : RightIcon ? 0 : -8,
  };

  if (lable) {
    const TopSizes = {
      large: 8,
      medium: 2,
      small: -1,
    };
    InputWrapperStyle = {
      ...InputWrapperStyle,
      top: TopSizes[size] ? TopSizes[size] : LeftIcon || RightIcon ? 4 : 0,
    };

    InputStyle = {
      ...InputStyle,
      top: 4,
    };
  }

  if (placeholder) {
    const TopSizes = {
      large: 2,
      medium: 2,
      small: -1,
    };
    InputWrapperStyle = {
      ...InputWrapperStyle,
      top: TopSizes[size] ? TopSizes[size] : LeftIcon || RightIcon ? 4 : 0,
    };

    const InputTopSize = {
      large: -2,
      medium: -2,
      small: 1,
    };

    InputStyle = {
      ...InputStyle,
      top: InputTopSize[size]
        ? InputTopSize[size]
        : LeftIcon || RightIcon
        ? 4
        : 0,
    };
  }

  return (
    <View>
      <View style={MainWrapperStyle}>
        {lable && (
          <Animated.Text style={[animatedHeaderTextSize]}>
            {lable}
          </Animated.Text>
        )}
        <View style={InputWrapperStyle}>
          {LeftIcon && <LeftIcon />}
          <TextInput
            style={InputStyle}
            name={name}
            defaultValue={value}
            onChangeText={(text) => handleInput({ name, text })}
            placeholder={!lable ? placeholder : ""}
            placeholderTextColor={
              error ? "#FF2C20" : disable ? "#CBCBCB" : "#757575"
            }
            onFocus={onFocusAction}
            onBlur={onBlurAction}
            editable={!disable}
            selectTextOnFocus={!disable}
          />
          {RightIcon && <RightIcon />}
        </View>
      </View>
      {error && (
        <View style={themeStyle.errorText}>
          <Text style={{ color: "#FF2C20" }}>{`* ${error}`}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;
