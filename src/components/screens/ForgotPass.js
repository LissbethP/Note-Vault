import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Logo from "../shared/Logo";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import theme from "../../theme";
import Alert from "../shared/Alert";
import * as AppAuth from 'expo-app-auth';
import firebase from "firebase/app";
const { URLSchemes } = AppAuth;
var provider = new firebase.auth.GoogleAuthProvider();

const forgotPassword = ({navigation, route})=>{
    return(
        <View style={styles.container}>
            <Logo />
            <ForgotPasswordForm  navigation = {navigation}/>
        </View>
    );
}

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


export default forgotPassword;