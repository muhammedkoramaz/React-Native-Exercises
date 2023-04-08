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

// ! TODO : boş stringleri hiç ekleme ve filtreleme yapma
// ! TODO : Metrics ve Colors dosyalarını oluştur
// ! TODO : Flatlist için keyExtractor kullan
// ! TODO : Flatlist için renderItem fonksiyonunu ayrı bir dosyada oluştur
// ! TODO : Flatlist için data propunu ayrı bir dosyada oluştur
// ! TODO : Flatlist için ItemSeparatorComponent kullan
// ! TODO : Her component için ayrı bir dosya oluştur
// ! TODO : Designi düzelt


export default function App() {
  const [task, setTask] = useState("");
  const [keyword, setKeyword] = useState("");
  const [filterWord, setFilterWord] = useState("");
  const [taskList, setTaskList] = useState([] as string[]);
  const handleAddTask = () => {
    setTaskList([...taskList, task]);
    setTask("");
  };
  const postListFiltered = taskList.filter((task) =>
    task.toLowerCase().includes(filterWord.toLowerCase())
  );
  // desc sorted tasklist function
  const sortByAscending = () => {
    setTaskList([...taskList].sort((a, b) => (a > b ? 1 : -1)));
    console.log(postListFiltered);
  };
  console.log(taskList);

  const sortByDescending = () => {
    setTaskList([...taskList].sort((a, b) => (a > b ? -1 : 1)));
  };
  const _renderItem = ({ item }: any) =>
    item != "" ? (
      <View style={styles.row}>
        <Text style={styles.item}>{item}</Text>
        <TouchableOpacity
          style={styles.checkBox}
          onPress={() => {
            setTaskList(taskList.filter((task) => task != item));
          }
          }
        >
          <Text style={{color:'black'}}>X</Text>
        </TouchableOpacity>
      </View>
      

    ) : null;
  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>TODO LIST</Text>
      </View>
      <View style={styles.column}>
        <TextInput
          style={styles.textInput}
          onChangeText={(task: string) => {
            setTask(task);
          }}
          value={task}
          placeholder="Todo..."
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(keyword: string) => {
            setKeyword(keyword);
          }}
          value={keyword}
          placeholder="Filtrele..."
        />
        <View style={styles.row}>
          <TouchableOpacity
            style={{ width: 100, height: 40, backgroundColor: "red" }}
            onPress={() => setFilterWord(keyword)}
          >
            <Text style={styles.buttonText}>Filtrele</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 100, height: 40, backgroundColor: "red" }}
            onPress={() => sortByAscending()}
          >
            <Text style={styles.buttonText}>ARTAN</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: 100, height: 40, backgroundColor: "red" }}
            onPress={() => sortByDescending()}
          >
            <Text style={styles.buttonText}>AZALAN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider}></View>
        <FlatList
          data={postListFiltered}
          renderItem={_renderItem}
          keyExtractor={(item) => item + Math.random() + Date.now()} //! TODO
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
