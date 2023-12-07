/* eslint-disable react-native/no-inline-styles */
import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import IconButton from "../../josh-components/icon-button";
import SingleDotSvg from "../../../assets/svgs/single-dot";

const IconButtonScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#333333" }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "row",
              gap: 50,
              marginTop: 40,
            }}
          >
            <IconButton
              theme="standard"
              icon={() => (
                <SingleDotSvg color="#FFFFFF" />
              )}
              size="extraLarge"
            />
            <IconButton
              theme="primary"
              icon={() => (
                <SingleDotSvg size={24} color="#7E49FF" />
              )}
              size="extraLarge"
            />
            <IconButton
              theme="secondary"
              icon={() => (
                <SingleDotSvg size={24} color="#000000" />
              )}
              size="extraLarge"
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "row",
              gap: 50,
              marginTop: 40,
            }}
          >
            <IconButton
              theme="standard"
              icon={() => (
                <SingleDotSvg size={24} color="#FFFFFF" />
              )}
              size="large"
            />
            <IconButton
              theme="primary"
              icon={() => (
                <SingleDotSvg size={24} color="#7E49FF" />
              )}
              size="large"
            />
            <IconButton
              theme="secondary"
              icon={() => (
                <SingleDotSvg size={24} color="#000000" />
              )}
              size="large"
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "row",
              gap: 50,
              marginTop: 40,
            }}
          >
            <IconButton
              theme="standard"
              icon={() => (
                <SingleDotSvg size={24} color="#FFFFFF" />
              )}
              size="medium"
            />
            <IconButton
              theme="primary"
              icon={() => (
                <SingleDotSvg size={24} color="#7E49FF" />
              )}
              size="medium"
            />
            <IconButton
              theme="secondary"
              icon={() => (
                <SingleDotSvg size={24} color="#000000" />
              )}
              size="medium"
            />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              flexDirection: "row",
              gap: 50,
              marginTop: 40,
            }}
          >
            <IconButton
              theme="standard"
              icon={() => (
                <SingleDotSvg size={24} color="#FFFFFF" />
              )}
              size="small"
            />
            <IconButton
              theme="primary"
              icon={() => (
                <SingleDotSvg size={24} color="#7E49FF" />
              )}
              size="small"
            />
            <IconButton
              theme="secondary"
              icon={() => (
                <SingleDotSvg size={24} color="#000000" />
              )}
              size="small"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default IconButtonScreen;
