import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([] as string[]);
  const handleAddTask = () => {
    setTaskList([...taskList, task]);
    setTask("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>TODO LIST</Text>
      </View>
      <View style={styles.column}>
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          onChangeText={(task: string) => {
            setTask(task);
          }}
          value={task}
          placeholder="Todo..."
        />
        <View style={styles.divider}></View>
        <FlatList
          data={taskList}
          renderItem={({ item }) => item !="" ? <Text style = {styles.item}>={">"} {item}</Text> : null}
          keyExtractor= {(item) => item + Math.random() + Date.now()}
          
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add List</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 32,
    flexDirection: "column",
  },
  appBar: {
    backgroundColor: "red",
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  appBarText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 8,
  },
  checkBox: {
    marginRight: 50,
  },
  column: {
    flexDirection: "column",
    paddingLeft: 16,
    paddingTop: 16,
  },
  textInput: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    margin: 12,
    padding: 10,
    width: 330,
  },
  button: {
    backgroundColor: "red",
    color: "white",
    padding: 20,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    marginTop: 16,
    height: 1,
  },
  item: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  
});
