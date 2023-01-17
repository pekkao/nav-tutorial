import React, { useState, useEffect } from "react";
import { Button, View, Text, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {

  const [nickname, setNickname] = useState('');
  const [firstname, setFirstname] = useState('');

  useEffect(() => {
    clearData();
  }, []);

  const clearData = async () => {
    try {
      await AsyncStorage.removeItem('@firstname');
    } catch (e) {
      // saving error
    }
  }

  const storeData = async (value) => {
    try {
      console.log(value);
      await AsyncStorage.setItem('@firstname', value)
    } catch (e) {
      // saving error
    }
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <TextInput
        onChangeText={setNickname}
        value={nickname}
        placeholder="Nickname"
      />
      <TextInput
        onChangeText={setFirstname}
        value={firstname}
        placeholder="Firstname"
      />
      <Button
        title="Save firstname"
        onPress={() => storeData(firstname)}
      />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About", {nickname: nickname})}
      />
    </View>
  );
}