import * as React from "react";
import { StyleSheet, View, Text, StatusBar} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import theme from '../../theme/index';
import GearButton from '../shared/GearButton'

const Home = ({ navigation }) => {
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
      headerRight: () => (
        <GearButton onPress={()=>{ navigation.navigate('Settings') }} />
      ),
    });
  });
    return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor= {theme.colors.primary} />
      <View>
        <Text>Hello from home</Text> 
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: theme.colors.bgw,
  }
});

export default Home;
