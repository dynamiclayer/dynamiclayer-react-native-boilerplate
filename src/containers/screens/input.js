/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Input from "../../josh-components/input";
import InformationSvg from "../../../assets/svgs/information";
import SearchSvg from "../../../assets/svgs/search";
import AlertCircleSvg from "../../../assets/svgs/alert-circle";
import MicroPhoneSvg from "../../../assets/svgs/microphone";
import AlertTriangleSvg from "../../../assets/svgs/alert-triangle";
import CheckCircleSvg from "../../../assets/svgs/check-circle";

const InputScreen = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue({ ...inputValue, [value.name]: value.text });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#fefefe" }}>
        <ScrollView
          contentContainerStyle={{ padding: 20, gap: 16, paddingBottom: 50 }}
        >
          <Text>Large size Input Field</Text>
          <Input
            lable="Textfield"
            name="input 1"
            size="large"
            onChangeText={handleInputChange}
          />
          <Input
            lable="Textfield"
            name="input 2"
            size="large"
            rightIcon={() => <InformationSvg />}
            onChangeText={handleInputChange}
          />
          <Input
            placeholder="Textfeild"
            name="input 3"
            size="large"
            leftIcon={() => <SearchSvg />}
            rightIcon={() => <MicroPhoneSvg />}
            onChangeText={handleInputChange}
            isSearch
            border={false}
          />
          <Input
            placeholder="Textfeild"
            name="input 4"
            size="large"
            disable
            rightIcon={() => <AlertTriangleSvg />}
            onChangeText={handleInputChange}
          />
          <Input
            lable="Textfield"
            name="input 5"
            size="large"
            rightIcon={() => <CheckCircleSvg />}
            onChangeText={handleInputChange}
          />
          <Input
            lable="Textfield"
            name="input 6"
            size="large"
            rightIcon={() => <AlertCircleSvg />}
            onChangeText={handleInputChange}
            error="Description"
          />
          <Text>Default OR Medium size Input Field</Text>
          <Input
            lable="Textfield"
            name="input 7"
            onChangeText={handleInputChange}
          />
          <Input
            lable="Textfield"
            name="input 8"
            rightIcon={() => <InformationSvg />}
            onChangeText={handleInputChange}
          />
          <Input
            placeholder="Textfeild"
            name="input 9"
            leftIcon={() => <SearchSvg />}
            rightIcon={() => <MicroPhoneSvg />}
            onChangeText={handleInputChange}
            isSearch
            border={false}
          />
          <Input
            placeholder="Textfeild"
            name="input 10"
            disabl
            rightIcon={() => <AlertTriangleSvg />}
            onChangeText={handleInputChange}
          />
          <Input
            lable="Textfield"
            name="input 11"
            rightIcon={() => <CheckCircleSvg />}
            onChangeText={handleInputChange}
          />
          <Input
            lable="Textfield"
            name="input 12"
            rightIcon={() => <AlertCircleSvg />}
            onChangeText={handleInputChange}
            error="Description"
          />
          <Text>Small size Input Field</Text>
          <Input
            lable="Textfield"
            name="input 13"
            size="small"
            onChangeText={handleInputChange}
          />
          <Input
            lable="Textfield"
            name="input 14"
            size="small"
            rightIcon={() => <InformationSvg />}
            onChangeText={handleInputChange}
          />
          <Input
            placeholder="Textfeild"
            name="input 15"
            size="small"
            leftIcon={() => <SearchSvg />}
            rightIcon={() => <MicroPhoneSvg />}
            onChangeText={handleInputChange}
            isSearch
            border={false}
          />
          <Input
            placeholder="Textfeild"
            name="input 16"
            size="small"
            disable
            rightIcon={() => <AlertTriangleSvg />}
            onChangeText={handleInputChange}
          />
          <Input
            lable="Textfield"
            name="input 17"
            size="small"
            rightIcon={() => <CheckCircleSvg />}
            onChangeText={handleInputChange}
          />
          <Input
            lable="Textfield"
            name="input 18"
            size="small"
            rightIcon={() => <AlertCircleSvg />}
            onChangeText={handleInputChange}
            error="Description"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default InputScreen;
