import React from "react";
import { TextInput as RTextInput, Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { styles, sizes, themeStyles, radiusList } from "./styles";

const InputField = ({
  inputValue,
  label,
  onChangeText = () => {},
  theme = "standard",
  size = "standard",
  radius = "standard",
  rightIcon: RightIcon,
  leftIcon: LeftIcon,
  floatingInput = true,
  containerStyles,
  error = false,
  ...props
}) => {
  const themeStyle = themeStyles[theme] || themeStyles.standard;
  const padding = sizes[size] || sizes.standard;
  const borderRadius = radiusList[radius] || radiusList.standard;
  
  return (
    <View style={{ width: "100%" }}>
      <View
        style={{
          ...themeStyle.wrapper,
          padding,
          borderRadius,
          ...containerStyles,
        }}
        {...props}
      >
        {LeftIcon && <LeftIcon />}
        {floatingInput ? (
          <TextInput
            label={label}
            style={{
              ...themeStyle.input,
            }}
            defaultValue={inputValue}
            onChangeText={(text) => onChangeText(text)}
            underlineColor="transparent"
            theme={{
              colors: {
                onSurfaceVariant: error && "red",
                primary: error ? "rgb(186, 26, 26)" : "#000",
              },
            }}
          />
        ) : (
          <RTextInput
            placeholder={label}
            style={{
              ...themeStyle.input,
              marginLeft: 10,
            }}
            defaultValue={inputValue}
            onChangeText={() => onChangeText}
          />
        )}
        {RightIcon && <RightIcon />}
      </View>
      {error && <Text style={{ color: "red" }}>* {error}</Text>}
    </View>
  );
};

export default InputField;
