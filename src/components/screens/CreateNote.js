import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Caption, IconButton, TextInput,Provider as PaperProvider } from "react-native-paper";
import { format } from "date-fns";
import theme from "../../theme";
import { Context as NoteContext } from "../../providers/NoteContext";
import { Context as AuthContext } from "../../providers/AuthContext";

const CreateNote = ({ navigation }) => {
  const { createNote } = useContext(NoteContext);
  const { state } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [timestamp, setTimestamp] = useState(Date.now());
  const [content, setContent] = useState("");

  const handleSaveNote = () => {
    if (!title) {
      setTitle("New note");
      createNote("New note", content, timestamp, state.user.id);
    } else createNote(title, content, timestamp, state.user.id);

    navigation.navigate("Home");
  };

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Nueva Nota',
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTintColor: theme.colors.purple,
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerRight: () => (
            <IconButton icon="check-circle"
              color={theme.colors.purple}
              size = {30}
              onPress={handleSaveNote}
            />
          ),
    });
  });

  return (
    <PaperProvider>
    <View style={styles.container}>
      <TextInput
        mode="flat"
        placeholder="Title"
        style={styles.titleInput}
        value={title}
        onChangeText={setTitle}
      />
      <Caption>{`${format(timestamp, "eee H:m")}, | ${
        content.length
      } characters`}</Caption>
      <TextInput
        multiline
        style={styles.contentInput}
        textAlignVertical="top"
        value={content}
        onChangeText={setContent}
      />
    </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.colors.bgw,
  },
  titleInput: {
    fontSize: 22,
    fontWeight: "bold",
    backgroundColor: theme.colors.bgw,
  },
  contentInput: {
    flex: 1,
    backgroundColor: "#fff",
    borderBottomWidth: 0,
  },
});

export default CreateNote;
