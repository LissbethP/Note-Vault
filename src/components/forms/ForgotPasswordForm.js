import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { validate } from "email-validator";
import { firebase } from "../../firebase";
import Alert from "../shared/Alert";

const ForgotPasswordForm = ({navigation}) =>{
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
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
            .catch((error) => {
                setError(error.message);
            });
    }
    
    return(
        <View>
            {error ? <Alert title={error} type="error" /> : null}
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
