import { StyleSheet } from "react-native";

const BaseStyle = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
    width: "100%",
    borderRadius: 12,
    borderColor: "#E2E2E2",
  },
  textContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    position: "relative",
  },
  errorText: {
    marginTop: 8,
  },
});

const large = {
  wrapper: {
    ...BaseStyle.wrapper,
    height: 56,
  },
  textContainer: {
    ...BaseStyle.textContainer,
  },
  errorText: {
    ...BaseStyle.errorText,
  },
};

const medium = {
  wrapper: {
    ...BaseStyle.wrapper,
    height: 48,
  },
  textContainer: {
    ...BaseStyle.textContainer,
  },
  errorText: {
    ...BaseStyle.errorText,
  },
};

const small = {
  wrapper: {
    ...BaseStyle.wrapper,
    height: 40,
  },
  textContainer: {
    ...BaseStyle.textContainer,
  },
  errorText: {
    ...BaseStyle.errorText,
  },
};

const themeStyles = {
  large,
  medium,
  small,
};

export { themeStyles };
