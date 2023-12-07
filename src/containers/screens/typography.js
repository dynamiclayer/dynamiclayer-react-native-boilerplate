/* eslint-disable react-native/no-inline-styles */
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  // Text,
  View,
} from "react-native";
import Typography from "../../josh-components/typography";
import "react-native-gesture-handler";

const TypographyScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "grey" }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ padding: 20, gap: 16, paddingBottom: 50 }}
        >
          {/*FONTSIZES =>  ExtraLarge, large, mediumLarge, medium, BodyLarge, BodySmall, small, */}
          <Typography
            size="largeTitle"
            boldText={true}
            lineHeight="full"
            text="Large Title"
          />
          <Typography
            size="mediumLarge"
            boldText={true}
            lineHeight="primary"
            text="Title 1"
          />
          <Typography
            size="large"
            boldText={true}
            lineHeight="primary"
            text="Title  2"
          />
          <Typography
            size="medium"
            boldText={true}
            lineHeight="standard"
            text="Title 3"
          />
          <Typography
            size="BodyLarge"
            lineHeight="standard"
            text="Body Large"
          />
          <Typography
            size="BodySmall"
            lineHeight="secondary"
            text="Body Small"
          />
          <Typography
            size="BodyLarge"
            lineHeight="standard"
            boldText={true}
            text="Body Large Bold"
          />
          <Typography
            size="BodySmall"
            lineHeight="secondary"
            boldText={true}
            text="Body Small Bold"
          />
          <Typography size="small" lineHeight="low" text="Caption" />
          <Typography
            size="small"
            lineHeight="standard"
            boldText={true}
            text="Navigation"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TypographyScreen;
