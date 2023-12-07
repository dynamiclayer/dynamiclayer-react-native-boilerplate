const { StyleSheet } = require("react-native");

const BaseStyle = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});

const standard = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    backgroundColor: "#7E49FF",
  },
});

const primary = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    backgroundColor: "#ECE8FF",
  },
});

const secondary = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },
});

const extraLarge = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    padding: 16,
  },
});

const large = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    padding: 12,
  },
});

const medium = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    padding: 8,
  },
});

const small = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    padding: 4,
  },
});

const themeStyles = {
  standard,
  primary,
  secondary,
};

const themeSizes = {
  extraLarge,
  large,
  medium,
  small,
};
export { themeStyles, themeSizes };
