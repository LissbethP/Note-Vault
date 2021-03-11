import React, { Component } from 'react'
import * as Google from 'expo-google-app-auth'

const IOS_CLIENT_ID = "875420519170-9agngrm01aunfto4hgln5tcvmb24lrmh.apps.googleusercontent.com";
const ANDROID_CLIENT_ID = "875420519170-gn5dhl6pcbdbfu3e3r591i3ivjcuopeg.apps.googleusercontent.com";

export default class GSignin extends Component {
    signInWithGoogle = async ()=>{
        try {
            const result = await Google.logInAsync({
                iosClientId: IOS_CLIENT_ID,
                androidClientId: ANDROID_CLIENT_ID,
                succes: ["profile", "email"]
            })

            if (result.type == "success") {
                console.log("User: ", result.user.giveName);
                return result.accessToken;
            }else{
                return {cancelled:true};
            }
        } catch (error) {
            console.log("GSignin: ", error)
            return {error: true}
        }
    }
}

