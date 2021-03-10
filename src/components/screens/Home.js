import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Home = ({ navigation }) => {
  return (
    <SafeAreaProvider>
      <View>
        <Text>Hello from home</Text> 
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({});

export default Home;
