const { StyleSheet } = require("react-native");

const BaseStyle = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "#fff",
  },
});

const largeTitle = StyleSheet.create({
  text: {
    ...BaseStyle.text,
    fontSize: 32,
  },
});

const mediumLarge = StyleSheet.create({
  text: {
    ...BaseStyle.text,
    fontSize: 24,
  },
});

const large = StyleSheet.create({
  text: {
    ...BaseStyle.text,
    fontSize: 20,
  },
});

const medium = StyleSheet.create({
  text: {
    ...BaseStyle.text,
    fontSize: 18,
  },
});

const BodyLarge = StyleSheet.create({
  text: {
    ...BaseStyle.text,
    fontSize: 16,
  },
});

const BodySmall = StyleSheet.create({
  text: {
    ...BaseStyle.text,
    fontSize: 14,
  },
});

const small = StyleSheet.create({
  text: {
    ...BaseStyle.text,
    fontSize: 12,
  },
});

const sizes = {
  largeTitle,
  large,
  mediumLarge,
  medium,
  BodyLarge,
  BodySmall,
  small,
};

const lineHeights = {
  full: {
    lineHeight: 40,
  },
  primary: {
    lineHeight: 32,
  },
  standard: {
    lineHeight: 24,
  },
  secondary: {
    lineHeight: 20,
  },
  low: {
    lineHeight: 16,
  },
};

export { sizes, lineHeights };
