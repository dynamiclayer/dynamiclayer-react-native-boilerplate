/* eslint-disable react-native/no-inline-styles */
import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, ScrollView, View } from "react-native";
import Avatar from "../../josh-components/avatar";
import UserSvg from "../../../assets/svgs/user";
import SingleDotSvg from "../../../assets/svgs/single-dot";

const AvatarScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#333333" }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 50, gap: 20 }}>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Avatar size="extraLarge" userImage={() => <UserSvg />} />
            <Avatar size="large" userImage={() => <UserSvg />} />
            <Avatar size="medium" userImage={() => <UserSvg />} />
            <Avatar size="small" userImage={() => <UserSvg />} />
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Avatar
              status="online"
              userImage={() => <UserSvg />}
              size="extraLarge"
            />
            <Avatar
              status="online"
              userImage={() => <UserSvg />}
              size="large"
            />
            <Avatar
              status="online"
              userImage={() => <UserSvg />}
              size="medium"
            />
            <Avatar
              status="online"
              userImage={() => <UserSvg />}
              size="small"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Avatar
              status="offline"
              userImage={() => <UserSvg />}
              size="extraLarge"
            />
            <Avatar
              status="offline"
              userImage={() => <UserSvg />}
              size="large"
            />
            <Avatar
              status="offline"
              userImage={() => <UserSvg />}
              size="medium"
            />
            <Avatar
              status="offline"
              userImage={() => <UserSvg />}
              size="small"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Avatar
              status="online"
              userImage={() => <UserSvg />}
              size="extraLarge"
              number="2"
            />
            <Avatar
              status="online"
              userImage={() => <UserSvg />}
              size="large"
              number="2"
            />
            <Avatar
              status="online"
              userImage={() => <UserSvg />}
              size="medium"
              number="2"
            />
            <Avatar
              status="online"
              userImage={() => <UserSvg />}
              size="small"
              number="2"
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <Avatar
              status="online"
              userImage={() => <UserSvg />}
              size="extraLarge"
              icon={() => <SingleDotSvg height={12} width={12} />}
            />
            <Avatar
              status="online"
              userImage={() => <UserSvg />}
              size="large"
              icon={() => <SingleDotSvg height={12} width={12} />}
            />
            <Avatar
              status="online"
              userImage={() => <UserSvg />}
              size="medium"
              icon={() => <SingleDotSvg height={8} width={8} />}
            />
            <Avatar
              status="online"
              userImage={() => <UserSvg />}
              size="small"
              icon={() => <SingleDotSvg height={8} width={8} />}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AvatarScreen;
