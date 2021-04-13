import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Logo from "../shared/Logo";
import SigninForm from "../forms/SigninForm";
import theme from "../../theme";
import Alert from "../shared/Alert";
import SocialButton from '../shared/SocialButtons';
import * as AppAuth from 'expo-app-auth';
import firebase from "firebase/app";
const { URLSchemes } = AppAuth;
var provider = new firebase.auth.GoogleAuthProvider();

const Login = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Logo />
      <SigninForm navigation={navigation} />
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPass")}>
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text>Don't have an account? Sign up</Text>
      </TouchableOpacity>      
      <SocialButton 
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => {
          firebase.auth()
          .signInWithPopup(provider)
          .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            navigation.navigate("Home");
          }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
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
