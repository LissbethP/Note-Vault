import React, { useState,useContext,useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { validate } from "email-validator";
import { firebase } from "../../firebase";
import Alert from "../shared/Alert";
import { Context as AuthContext } from "../../providers/AuthContext";


const ForgotPasswordForm = ({navigation}) =>{

    // const { state} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [errorE, setErrorE] = useState("");  
    const [emailError, setEmailError] = useState(false);
    

    const handleVerify = (input) => {
        if (input === "email") {
          if (!email) setEmailError(true);
          else if (!validate(email)) setEmailError(true);
          else setEmailError(false);
        }
      };

    const passwordReset = (email) => {
        firebase.auth().sendPasswordResetEmail(email)
            .then((response) =>{
                navigation.navigate("Signin");
            })
            .catch((errorE) => {
                setErrorE(errorE.message);
            });
    }
    
    return(
        <View>
            {/* {errorE ? <Alert title={errorE} type="error" /> : null} */}
            <Input
                placeholder="Email"
                leftIcon={<Icon name="envelope" />}
                value={email}
                onChangeText={setEmail}
                onBlur={() => {
                handleVerify("email");
                }}
                errorMessage={
                emailError
                    ? "Por favor ingresa tu cuenta de correo electrónico"
                    : null
                }
            />
            <Button title="Send Email" onPress={passwordReset(email)} />
        </View>
    );
};

const styles = StyleSheet.create({})

export default ForgotPasswordForm;
