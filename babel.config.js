module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["module:metro-react-native-babel-preset"],
    plugins: [
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-paper/babel",
      "module-resolver",
      "react-native-reanimated/plugin",
    ],
    env: {
      production: {
        plugins: [
          "@babel/plugin-proposal-export-namespace-from",
          "react-native-paper/babel",
          "module-resolver",
          {
            extensions: [".tsx", ".ts", ".js", ".json"],
          },
          "react-native-reanimated/plugin",
        ],
      },
    },
  };
};
