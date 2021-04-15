import React, { useContext, useEffect } from "react";
import {Text, View, StyleSheet, StatusBar} from 'react-native'
import { Button,Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme/index'
import { Context as AuthContext } from "../../providers/AuthContext";


const Settings = ({ navigation })=>{
  const { state, signout } = useContext(AuthContext);

    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: 'Ajustes',
          headerStyle: {
            backgroundColor: theme.colors.primary,
          },
          headerTintColor: theme.colors.purple,
              headerTitleStyle: {
                fontWeight: 'bold',
              },
        });
      });
    return(
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor= {theme.colors.primary} />
        <PaperProvider>
          <View style={styles.container}>
            <Button color={theme.colors.primary} icon="logout-variant" mode="contained" onPress={() => {signout();}}>
              Log Out
            </Button>
          </View>

        </PaperProvider>
      </SafeAreaView>        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
        backgroundColor: theme.colors.backgroundWhite,
    }
})


export default Settings;