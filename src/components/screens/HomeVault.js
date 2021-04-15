import React, { useContext, useEffect,useState } from "react";
import { StyleSheet, View, TouchableOpacity,Platform,Alert} from "react-native";
import { Image } from 'react-native-elements';
import { Appbar, Button, FAB, Title,Provider as PaperProvider} from "react-native-paper";
import { Context as AuthContext } from "../../providers/AuthContext";
import Toast from "react-native-toast-message";
import theme from '../../theme/index';
import { ThemeProvider } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import { firebase } from "../../firebase";

// import * as Font from 'expo-font';

const HomeVault = ({ navigation }) => {
    const { state, signout } = useContext(AuthContext);
    const [image, setImage ]= useState(null);

    const pickImage = async ()=>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing : false
        })
        if(!result.cancelled){
            setImage(result.uri);
            console.log(result);
            let fname = result.uri;
            let filename = fname.substring(fname.lastIndexOf('/')+1)
            this.uploadImage(result.uri,filename)
                .then(()=>{
                    Alert.alert('success');
                })
                .catch((error)=>{
                    Alert.alert('Error:', error.message)
                })
        }else{
            console.log('cancel');
        }
    }

    /* function listFilesAndDirectories(reference, pageToken) {
        return reference.list({ pageToken }).then(result => {
          // Loop over each item
          result.items.forEach(ref => {
            console.log(ref.fullPath);
          });
      
          if (result.nextPageToken) {
            return listFilesAndDirectories(reference, result.nextPageToken);
          }
      
          return Promise.resolve();
        });
      }

    const reference = firebase.storage().ref(state.user.id+"/");

    listFilesAndDirectories(reference).then(() => {
        console.log('Finished listing');
    }); */

    uploadImage = async (uri,imageName)=>{
        const response = await fetch(uri);
        const blob = await response.blob();

        var ref = firebase.storage().ref().child(state.user.id+"/"+imageName);
        return ref.put(blob);
    }

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Vault',
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: theme.colors.purple,
          headerTitleStyle: {
            fontWeight: 'bold',
          }
    });
  });

    return (
      <PaperProvider >
        <View style={styles.container}>
            {image  && <Image source={{uri:image}} style={{width:200, height: 200}}/>}
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
        <FAB
          style={styles.fab}
          icon="plus"
          color= {theme.colors.purple}
          onPress={pickImage}
        />
    </PaperProvider>
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

export default HomeVault;