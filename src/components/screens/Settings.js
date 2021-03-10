import React from 'react'
import {Text, View, StyleSheet, StatusBar} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme/index'

const Settings = ({ navigation })=>{
    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: 'NoteVault',
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
        <View>
          <Text>Hello from settings</Text> 
        </View>
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