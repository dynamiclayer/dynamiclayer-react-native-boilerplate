const { StyleSheet } = require("react-native");

const BaseStyle = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    flexDirection: "row",
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 16,
  },
});

const standard = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    backgroundColor: "#7E49FF",
  },
  title: {
    ...BaseStyle.title,
    color: "#FFFFFF",
  },
  dot: {
    ...BaseStyle.dot,
    backgroundColor: "#ffffff",
  },
});

const secondary = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    backgroundColor: "#ECE8FF",
  },
  title: {
    ...BaseStyle.title,
    color: "#7E49FF",
  },
  dot: {
    ...BaseStyle.dot,
    backgroundColor: "#7E49FF",
  },
});

const light = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    backgroundColor: "#FFFFFF",
  },
  title: {
    ...BaseStyle.title,
    color: "#020617",
  },
  dot: {
    ...BaseStyle.dot,
    backgroundColor: "#020617",
  },
});

const offlight = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
  },
  title: {
    ...BaseStyle.title,
    color: "#7E49FF",
    fontSize: 14,
    textDecorationLine: "underline",
  },
  dot: {
    ...BaseStyle.dot,
    backgroundColor: "#7E49FF",
  },
});

const styles = {
  standard,
  secondary,
  light,
  offlight,
};
const sizes = {
  standard: 16,
  secondary: 12,
  light: 8,
  offlight: 4,
};

const radiusList = {
  standard: 12,
  full: 9999,
  none: 0,
};
export { styles, sizes, radiusList };
