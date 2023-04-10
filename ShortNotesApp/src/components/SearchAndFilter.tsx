import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "../styles/Style";

type searchAndFilterProps = {
  task: string;
  setTask: (task: string) => void;
  handleAddTask: () => void;
  filtersVisible: boolean;
  setFiltersVisible: (filtersVisible: boolean) => void;
};
const SearchAndFilter = (props: searchAndFilterProps) => {
  const { task, setTask, handleAddTask, filtersVisible, setFiltersVisible } =
    props;
  return (
    <View>
      <TextInput
        style={styles.textInput}
        onChangeText={(task) => {
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
        <Text
          style={filtersVisible ? styles.filterTextClicked : styles.filterText}
        >
          {filtersVisible ? "Fitreleri gizle" : "Filtreleri göster"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default SearchAndFilter;
