/* eslint-disable react-native/no-inline-styles */
import React from "react";
import Button from "../../josh-components/button";
import {
  Image,
  SafeAreaView,
  ScrollView,
  // Text,
  View,
} from "react-native";
import "react-native-gesture-handler";
import SingleDotSvg from "../../../assets/svgs/single-dot";

const ButtonScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ScrollView
          contentContainerStyle={{ padding: 20, gap: 16, paddingBottom: 50, backgroundColor: "#f8f8f850" }}
        >
          <View
            style={{
              gap: 10,
            }}
          >
            <Button
              title={"Button Field"} // to provide title
              // theme="standard" // "standard" || "secondary" || "light" || "offlight"
              // size="standard" // "standard" || "secondary" || "light" || "offlight"
              // radius="standard" // "standard" || "full"
              leftIcon={({color}) => <SingleDotSvg />}
              rightIcon={({color}) => <SingleDotSvg />}
            />

            <Button
              title={"Button Field"}
              theme="secondary"
              leftIcon={({color}) => <SingleDotSvg color={color} />}
              rightIcon={({color}) => <SingleDotSvg color={color} />}
            />
            <Button
              title={"Button Field"}
              theme="light"
              leftIcon={({color}) => <SingleDotSvg color={color} />}
              rightIcon={({color}) => <SingleDotSvg color={color} />}
            />
            <Button
              title={"Button Field"}
              theme="offlight"
              leftIcon={({color}) => <SingleDotSvg color={color} />}
              rightIcon={({color}) => <SingleDotSvg color={color} />}
            />

            <Button
              title={"Button Field"}
              theme="standard"
              size="secondary"
              leftIcon={({color}) => <SingleDotSvg />}
              rightIcon={({color}) => <SingleDotSvg />}
            />
            <Button
              title={"Button Field"}
              theme="secondary"
              size="secondary"
              leftIcon={({color}) => <SingleDotSvg color={color} />}
              rightIcon={({color}) => <SingleDotSvg color={color} />}
            />
            <Button
              title={"Button Field"}
              theme="light"
              size="secondary"
              leftIcon={({color}) => <SingleDotSvg color={color} />}
              rightIcon={({color}) => <SingleDotSvg color={color} />}
            />
            <Button
              title={"Button Field"}
              theme="offlight"
              size="secondary"
              leftIcon={({color}) => <SingleDotSvg color={color} />}
              rightIcon={({color}) => <SingleDotSvg color={color} />}
            />

            <Button
              title={"Button Field"}
              theme="standard"
              size="light"
              radius="full"
              leftIcon={({color}) => <SingleDotSvg />}
              rightIcon={({color}) => <SingleDotSvg />}
            />
            <Button
              title={"Button Field"}
              theme="secondary"
              size="light"
              radius="full"
              leftIcon={({color}) => <SingleDotSvg color={color} />}
              rightIcon={({color}) => <SingleDotSvg color={color} />}
            />
            <Button
              title={"Button Field"}
              theme="light"
              size="light"
              radius="full"
              leftIcon={({color}) => <SingleDotSvg color={color} />}
              rightIcon={({color}) => <SingleDotSvg color={color} />}
            />
            <Button
              title={"Button Field"}
              theme="offlight"
              size="light"
              radius="full"
              leftIcon={({color}) => <SingleDotSvg color={color} />}
              rightIcon={({color}) => <SingleDotSvg color={color} />}
            />

            <Button
              title={"Button Field"}
              theme="standard"
              size="offlight"
              radius="full"
              leftIcon={({color}) => <SingleDotSvg />}
              rightIcon={({color}) => <SingleDotSvg />}
            />
            <Button
              title={"Button Field"}
              theme="secondary"
              size="offlight"
              radius="full"
              leftIcon={({color}) => <SingleDotSvg color={color} />}
              rightIcon={({color}) => <SingleDotSvg color={color} />}
            />
            <Button
              title={"Button Field"}
              theme="light"
              size="offlight"
              radius="full"
              leftIcon={({color}) => <SingleDotSvg color={color} />}
              rightIcon={({color}) => <SingleDotSvg color={color} />}
            />
            <Button
              title={"Button Field"}
              theme="offlight"
              size="offlight"
              radius="full"
              leftIcon={({color}) => <SingleDotSvg color={color} />}
              rightIcon={({color}) => <SingleDotSvg color={color} />}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ButtonScreen;
