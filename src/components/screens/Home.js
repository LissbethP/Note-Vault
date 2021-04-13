import React, { useContext, useEffect } from "react";
import { StyleSheet, View} from "react-native";
import { Appbar, Button, FAB, Title,Provider as PaperProvider} from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import { Context as NoteContext } from "../../providers/NoteContext";
import NoteList from "../shared/NoteList";
import Toast from "react-native-toast-message";
import GearButton from '../shared/GearButton'
import theme from '../../theme/index';
import { ThemeProvider } from "@react-navigation/native";
// import * as Font from 'expo-font';

const Home = ({ navigation }) => {
  const { state, signout } = useContext(AuthContext);
  const { state: noteState, getNotes, clearMessage } = useContext(NoteContext);

  useEffect(() => {
    getNotes(state.user.id);
  }, []);

  useEffect(() => {
    if (noteState.errorMessage) {
      Toast.show({
        text2: noteState.errorMessage,
      });
      clearMessage();
    }
  }, [noteState.errorMessage]);

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
    <>
      <PaperProvider >
        <View style={styles.container}>
          <NoteList notes={noteState.notes} navigation={navigation} />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
        <FAB
          style={styles.fab}
          icon="plus"
          color= {theme.colors.purple}
          onPress={() => {
            navigation.navigate("CreateNote");
          }}
        />
    </PaperProvider>
    </>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontWeight: "bold",
    padding: 20,
  },
  appbar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 15,
    backgroundColor: theme.colors.primary
  },
});

export default Home;
