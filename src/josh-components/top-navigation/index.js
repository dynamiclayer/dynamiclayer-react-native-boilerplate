import React from "react";
import { View } from "react-native";
import { themeStyles } from "./styles";
import Typography from "../typography";
import Input from "../input";
import Avatar from "../avatar";
import SearchSvg from "../../../assets/svgs/search";
import MicroPhoneSvg from "../../../assets/svgs/microphone";

const TopNavigation = ({
  theme = "standard",
  tabTitle = "Title",
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  userImage: UserImage,
  search = false,
  // searchInput: SearchInput,
  onChangeText,
  value,
  ...props
}) => {
  const themeStyle = themeStyles[theme] || themeStyles.standard;

  const handleInputChange = (value) => {
    onChangeText(value);
  };

  return (
    <View
      style={{
        ...themeStyle.wrapper,
        ...props,
      }}
    >
      <View style={themeStyle.container}>
        <View style={{ paddingHorizontal: 16 }}>
          {LeftIcon && theme !== "inlineAvatar" ? (
            <LeftIcon />
          ) : (
            <View style={{ flexDirection: "row", gap: 16 }}>
              <Avatar size="medium" userImage={() => <UserImage />} />
              <Typography
                size="large"
                boldText={true}
                text={tabTitle}
                color="#000"
                containerStyle={{ lineHeight: 40 }}
              />
            </View>
          )}
        </View>
        {search && theme === "inlineSearch" ? (
          <View style={{ width: "70%" }}>
           <Input
              placeholder="Search"
              name="search1"
              size="small"
              leftIcon={() => <SearchSvg />}
              rightIcon={() => <MicroPhoneSvg />}
              onChangeText={handleInputChange}
              border={false}
              isSearch
            />
            {/* {SearchInput && <SearchInput />} */}
          </View>
        ) : (
          theme !== "inlineAvatar" && (
            <Typography
              size="BodyLarge"
              boldText={true}
              text={tabTitle}
              color="#000"
            />
          )
        )}
        <View style={{ padding: 16, flexDirection: "row", gap: 32 }}>
          {theme === "inlineAvatar" && <LeftIcon />}
          {RightIcon && <RightIcon />}
        </View>
      </View>
      {search && theme === "bottomSearch" && (
        <View style={{ paddingHorizontal: 16 }}>
          <Input
            placeholder="Search"
            name="search1"
            size="small"
            leftIcon={() => <SearchSvg />}
            rightIcon={() => <MicroPhoneSvg />}
            onChangeText={handleInputChange}
            border={false}
            isSearch
          />
          {/* {SearchInput && <SearchInput />} */}
        </View>
      )}
    </View>
  );
};

export default TopNavigation;
