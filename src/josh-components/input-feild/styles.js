const { StyleSheet } = require("react-native");

const BaseStyle = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    paddingHorizontal: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  input: {
    fontSize: 16,
    flex: 1,
    backgroundColor: "transparent",
  },
});

const standard = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    minHeight: 48,
    backgroundColor: "#FFFFFF",
  },
  input: {
    ...BaseStyle.input,
  },
});

const secondary = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    minHeight: 40,
    backgroundColor: "#ECE8FF",
  },
  input: {
    ...BaseStyle.input,
  },
});

const themeStyles = {
  standard,
  secondary,
};
const sizes = {
  standard: 4,
  secondary: 0,
};

const radiusList = {
  standard: 16,
  full: 9999,
  none: 0,
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "transparent",
    flex: 1,
  },
  wrapper: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    borderRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
  },
  color: {
    text: "red",
  },
  icon: {
    paddingTop: 18,
    paddingRight: 5,
  },
});
export { styles, themeStyles, sizes, radiusList };
