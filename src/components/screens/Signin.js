import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Logo from "../shared/Logo";
import SigninForm from "../forms/SigninForm";
import theme from "../../theme";
import Alert from "../shared/Alert";
import SocialButton from '../shared/SocialButtons';
import GoogleSignIn from '../../providers/GoogleSignIn'
import * as AppAuth from 'expo-app-auth';
const { URLSchemes } = AppAuth;

const Login = ({ navigation, route }) => {
  const { userCreated } = route.params;
  return (
    <View style={styles.container}>
      <Logo />
      {userCreated ? (
        <Alert type="success" title="User created! You can now sign in!" />
      ) : null}
      <SigninForm navigation={navigation} />
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text>Don't have an account? Sign up</Text>
      </TouchableOpacity>      
      <SocialButton 
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {
          try {
            GoogleSignIn.initAsync({
              clientId: '875420519170-9agngrm01aunfto4hgln5tcvmb24lrmh.apps.googleusercontent.com',
            });
          } catch ({ message }) {
            alert('GoogleSignIn.initAsync(): ' + message);
          }
          
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: theme.colors.bgw,
  },
  forgotPassword: {
    textAlign: "right",
  },
});

export default Login;
