/* eslint-disable react-native/no-inline-styles */
import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ButtonScreen from "./screens/buttons";
import TypographyScreen from "./screens/typography";
import AvatarScreen from "./screens/avatar";
import IconButtonScreen from "./screens/icon-button";
import InputScreen from "./screens/input";
import TopNavigationScreen from "./screens/top-navigation";

const App = () => {
  const Stack = createStackNavigator();
  const Drawer = createDrawerNavigator();

  const TABS = [
    { name: "Typography", component: TypographyScreen },
    { name: "Avatar", component: AvatarScreen },
    { name: "Button", component: ButtonScreen },
    { name: "Icon Button", component: IconButtonScreen },
    { name: "Top Navigation", component: TopNavigationScreen },
    { name: "Input", component: InputScreen },
  ];

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Presentation">
        {TABS.map((element, i) => {
          return <Stack.Screen key={`screen-${i}`} {...element} />;
        })}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
