/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { SafeAreaView, ScrollView, View } from "react-native";
import TopNavigation from "../../josh-components/top-navigation";
import UserSvg from "../../../assets/svgs/user";
import SingleDotSvg from "../../../assets/svgs/single-dot";
import SearchSvg from "../../../assets/svgs/search";
import MicroPhoneSvg from "../../../assets/svgs/microphone";
import Input from "../../josh-components/input";

const TopNavigationScreen = () => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    setInputValue({ [value.name]: value.text });
  };

  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);

  // const SearchInput = () => {
  //   return (
  //     <Input
  //       placeholder="Search"
  //       name="search"
  //       size="small"
  //       leftIcon={() => <SearchSvg />}
  //       rightIcon={() => <MicroPhoneSvg />}
  //       onChangeText={()=>handleInputChange}
  //       backgroundColor="#F6F6F6"
  //       border={false}
  //     />
  //   );
  // };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#333333" }}>
        <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
          <View
            style={{
              gap: 50,
              marginTop: 40,
            }}
          >
            <TopNavigation
              theme="standard"
              tabTitle="Description"
              leftIcon={() => <SingleDotSvg color="#000" />}
              rightIcon={() => <SingleDotSvg color="#000" />}
            />
            <TopNavigation
              theme="bottomSearch"
              tabTitle="Description"
              onChangeText={handleInputChange}
              leftIcon={() => <SingleDotSvg color="#000" />}
              rightIcon={() => <SingleDotSvg color="#000" />}
              search={true}
              // searchInput={()=> <SearchInput />}
            />
            <TopNavigation
              theme="inlineAvatar"
              tabTitle="Description"
              userImage={() => <UserSvg />}
              leftIcon={() => <SingleDotSvg color="#000" />}
              rightIcon={() => <SingleDotSvg color="#000" />}
            />
            <TopNavigation
              theme="inlineSearch"
              tabTitle="Description"
              onChangeText={handleInputChange}
              leftIcon={() => <SingleDotSvg color="#000" />}
              rightIcon={() => <SingleDotSvg color="#000" />}
              search={true}
              // searchInput={()=> <SearchInput />}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default TopNavigationScreen;
