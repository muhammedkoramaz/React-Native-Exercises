import {
  FlatList,
  ScrollView,
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
// ! TODO : Flatlist için data propunu ayrı bir dosyada oluştur
// ! TODO : Her component için ayrı bir dosya oluştur
// ! TODO : Designi düzelt
const ItemSeparatorView = () => {
  return (
    //Item Separator
    <View
      style={{
        height: 1,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "black",
      }}
    />
  );
};

export default function App() {
  const [task, setTask] = useState("");
  const [keyword, setKeyword] = useState("");
  const [filterWord, setFilterWord] = useState("");
  const [taskList, setTaskList] = useState([] as string[]);
  const [filtersVisible, setFiltersVisible] = useState(false);

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
          }}
        >
          <Text style={styles.filterText}>Sil</Text>
        </TouchableOpacity>
      </View>
    ) : null;

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>KISA NOTLAR</Text>
      </View>
      <View style={styles.column}>
        <TextInput
          style={styles.textInput}
          onChangeText={(task: string) => {
            setTask(task);
          }}
          value={task}
          placeholder="Not Yazın..."
        />
        <TouchableOpacity style={styles.button} onPress={handleAddTask}>
          <Text style={styles.buttonText}>EKLE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.filterView}
          onPress={() => setFiltersVisible(!filtersVisible)}
        >
          <Text style={filtersVisible ? styles.filterTextClicked : styles.filterText}>{filtersVisible ? "Fitreleri gizle": "Filtreleri göster"}</Text>
        </TouchableOpacity>
        {filtersVisible && (
          <View>
            <TextInput
              style={styles.textInput}
              onChangeText={(keyword: string) => {
                setKeyword(keyword);
              }}
              value={keyword}
              placeholder="Aranacak Metin..."
            />
            <View style={styles.row}>
              <Text style={styles.sortingText}>Alfabetik Sırala:</Text>
              <View style={styles.sortingButtonView}>
                <TouchableOpacity
                  style={styles.sortingButton}
                  onPress={() => sortByAscending()}
                >
                  <Text style={styles.sortingButtonText}>Artan</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.sortingButton}
                  onPress={() => sortByDescending()}
                >
                  <Text style={styles.sortingButtonText}>Azalan</Text>
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => setFilterWord(keyword)}
            >
              <Text style={styles.buttonText}>Filtrele</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.divider}></View>
        <Text style={styles.notesText}>Notlar</Text>
        <FlatList
          data={postListFiltered}
          renderItem={_renderItem}
          keyExtractor={(item) => item + Math.random() + Date.now()} // ! TODO : unique key
          ItemSeparatorComponent={ItemSeparatorView}
        />
      </View>

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
    backgroundColor: "white",
    width: "100%",
    height: 75,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  filterTextClicked: {
    flexDirection: "row-reverse",
    fontSize: 15,
    textAlign: "left",
    fontWeight: "bold",
    color: "#CA4528",
    textDecorationLine: "underline",
  },
  appBarText: {
    color: "black",
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
  },
  textInput: {
    height: 40,
    marginTop: 20,
    marginLeft: 30,
    padding: 10,
    width: 330,
    borderRadius: 10,
    backgroundColor: "#E4EFED",
  },
  button: {
    backgroundColor: "#447970",
    color: "white",
    height: 41,
    marginTop: 20,
    marginLeft: 30,
    width: 330,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
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
    width: 750,
    height: 1,
    marginTop: 10,
  },
  item: {
    padding: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  filterView: {
    alignItems: "flex-end",
    paddingRight: 15,
  },
  filterText: {
    flexDirection: "row-reverse",
    fontSize: 15,
    textAlign: "left",
    fontWeight: "bold",
    color: "#43736A",
    textDecorationLine: "underline",
  },

  sortingText: {
    fontSize: 15,
    textAlign: "left",
    fontWeight: "bold",
    color: "#43736A",
    paddingLeft: 13,
  },
  sortingButtonView: {
    flexDirection: "row",
    paddingRight: 10,
  },
  sortingButton: {
    backgroundColor: "#447970",
    color: "white",
    height: 30,
    width: 65,
    borderRadius: 10,
    marginRight: 8,
  },
  sortingButtonText: {
    color: "white",
    fontSize: 13,
    textAlign: "center",
    margin: 6,
  },
  notesText: {
    fontSize: 18,
    textAlign: "left",
    fontWeight: "bold",
    color: "#000000",
    padding: 10,
  },
});
