import { Text, TextInput, TouchableOpacity, View } from "react-native";

import styles from "../styles/Style";

type filterAreaProps = {
  keyword: string;
  setKeyword: (keyword: string) => void;
  sortByAscending: () => void;
  sortByDescending: () => void;
  setFilterWord: (keyword: string) => void;
  isSelectZA: boolean;
  isSelectAZ: boolean;
  setIsSelectAZ: (isSelectAZ: boolean) => void;
  setIsSelectZA: (isSelectZA: boolean) => void;
};
const FilterArea = (props: filterAreaProps) => {
  const {
    keyword,
    setKeyword,
    sortByAscending,
    sortByDescending,
    setFilterWord,
    isSelectZA,
    isSelectAZ,
    setIsSelectZA,
    setIsSelectAZ,
  } = props;

  return (
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
            style={[
              styles.sortingButton,
              { backgroundColor: isSelectAZ ? "white" : "#447970" },
            ]}
            onPress={() => {
              setIsSelectZA(false);
              setIsSelectAZ(true);
            }}
          >
            <Text
              style={[
                styles.sortingButtonText,
                { color: isSelectAZ ? "#447970" : "white" },
              ]}
            >
              Artan
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.sortingButton,
              { backgroundColor: isSelectZA ? "white" : "#447970" },
            ]}
            onPress={() => {
              setIsSelectZA(true);
              setIsSelectAZ(false);
            }}
          >
            <Text
              style={[
                styles.sortingButtonText,
                { color: isSelectZA ? "#447970" : "white" },
              ]}
            >
              Azalan
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setFilterWord(keyword);
          isSelectAZ ? sortByAscending() : sortByDescending();
        }}
      >
        <Text style={styles.buttonText}>UYGULA</Text>
      </TouchableOpacity>
    </View>
  );
};
export default FilterArea;
