const { StyleSheet } = require("react-native");

const BaseStyle = StyleSheet.create({
  wrapper: {
    width: "100%",
    backgroundColor: "#ffffff",
    alignContent: "center",
  },
  container: {
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
    justifyContent: "space-between",
    borderRadius: 12,
    flex: 1,
    alignItems: "center",
  },
});

const standard = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    justifyContent: "space-around",
  },
  container: { ...BaseStyle.container },
});

const secondary = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    backgroundColor: "#7E49FF",
  },
  container: { ...BaseStyle.container },
});

const themeStyles = {
  standard,
  secondary,
};
export { themeStyles };
