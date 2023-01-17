import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AboutScreen({route}) {

  const [firstname, setFirstname] = useState('');
  const nickname = route.params.nickname;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const firstname = await AsyncStorage.getItem('@firstname');
      console.log(firstname);
      if (firstname !== null) {
        setFirstname(firstname);
      }
    } catch(e) {
      // error reading value
    }
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About Screen</Text>
      <Text>Nickname: {nickname}</Text>
      <Text>Firstname: {firstname}</Text>
    </View>
  );
}