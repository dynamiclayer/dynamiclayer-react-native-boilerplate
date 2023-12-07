const { StyleSheet } = require("react-native");

const BaseStyle = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    backgroundColor: "#FFF",
    borderRadius: 9999,
  },
  icon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    right: -2,
    bottom: -2,
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#ffffff",
    borderRadius: 999,
  },
  status: {
    color: "#fff",
    fontWeight: 700,
    textAlign: "center",
  },
});

const extraLarge = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    padding: 16,
  },
  icon: {
    ...BaseStyle.icon,
    width: 20,
    height: 20,
  },
  status: {
    ...BaseStyle.status,
    fontSize: 12,
    lineHeight: 12,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
});

const large = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    padding: 12,
  },
  icon: {
    ...BaseStyle.icon,
    width: 18,
    height: 18,
  },
  status: {
    ...BaseStyle.status,
    fontSize: 12,
    lineHeight: 12,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
});

const medium = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    padding: 8,
  },
  icon: {
    ...BaseStyle.icon,
    width: 16,
    height: 16,
  },
  status: {
    ...BaseStyle.status,
    fontSize: 8,
    lineHeight: 8,
    paddingHorizontal: 4,
    paddingVertical: 3,
  },
});

const small = StyleSheet.create({
  wrapper: {
    ...BaseStyle.wrapper,
    padding: 4,
  },
  icon: {
    ...BaseStyle.icon,
    width: 14,
    height: 14,
  },
  status: {
    ...BaseStyle.status,
    fontSize: 8,
    lineHeight: 8,
    paddingHorizontal: 3,
    paddingVertical: 2,
  },
});

const themeStyles = {
  extraLarge,
  large,
  medium,
  small,
};
export { themeStyles };
