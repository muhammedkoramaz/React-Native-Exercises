import { Text, TouchableOpacity, View } from "react-native";

import FilterArea from "./src/components/FilterArea";
import NotesArea from "./src/components/NotesArea";
import SearchAndFilter from "./src/components/SearchAndFilter";
import { StatusBar } from "expo-status-bar";
import styles from "./src/styles/Style";
import { useState } from "react";

const Header = () => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.appBarText}>KISA NOTLAR</Text>
    </View>
  );
};

export default function App() {
  const [task, setTask] = useState("");
  const [keyword, setKeyword] = useState("");
  const [filterWord, setFilterWord] = useState("");
  const [taskList, setTaskList] = useState([] as string[]);
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [isSelectZA, setIsSelectZA] = useState(false);
  const [isSelectAZ, setIsSelectAZ] = useState(false);

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
      <Header />
      <View style={styles.column}>
        <SearchAndFilter
          task={task}
          setTask={setTask}
          handleAddTask={handleAddTask}
          filtersVisible={filtersVisible}
          setFiltersVisible={setFiltersVisible}
        />
        {filtersVisible && (
          <FilterArea
            keyword={keyword}
            setKeyword={setKeyword}
            sortByAscending={sortByAscending}
            sortByDescending={sortByDescending}
            setFilterWord={setFilterWord}
            isSelectAZ={isSelectAZ}
            isSelectZA={isSelectZA}
            setIsSelectAZ={setIsSelectAZ}
            setIsSelectZA={setIsSelectZA}
          />
        )}
        <View style={styles.divider}></View>
        <Text style={styles.notesText}>Notlar</Text>
        <NotesArea
          postListFiltered={postListFiltered}
          _renderItem={_renderItem}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
