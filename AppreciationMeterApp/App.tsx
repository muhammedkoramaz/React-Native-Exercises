import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const [time, setTime] = useState(1);
  const [work, setWork] = useState(1);
  const [level, setLevel] = useState(1);
  const Apprecition = () => {
    const result = time * work * level;
    if (result < 15) {
      return "Sağlık Olsun";
    }
    if (result >= 15 && result < 30) {
      return "Bravo, Çok Verimlisin";
    }
    if (result >= 30) {
      return "Mükemmelsin";
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>YEMEK SİPARİŞİ</Text>
      </View>
      <View style={styles.row}>
        <Text>Çalıştığım Süre: </Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setTime(time - 1);
            }}
          >
            <Text style={styles.textBorder}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textBorder}>{time}</Text>
          <TouchableOpacity
            onPress={() => {
              setTime(time + 1);
            }}
          >
            <Text style={styles.textBorder}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <Text>Bitirdiğim İş Sayısı: </Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setWork(work - 1);
            }}
          >
            <Text style={styles.textBorder}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textBorder}>{work}</Text>
          <TouchableOpacity
            onPress={() => {
              setWork(work + 1);
            }}
          >
            <Text style={styles.textBorder}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.column}>
        <Text>Zorluk Seviyesi</Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setLevel(1);
            }}
          >
            <Text style={styles.textBorder}>Kolay</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setLevel(2);
            }}
          >
            <Text style={styles.textBorder}>Orta</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setLevel(3);
            }}
          >
            <Text style={styles.textBorder}>Zor</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{Apprecition()}</Text>
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
  textBorder: {
    borderWidth: 1,
    borderColor: "black",
    fontSize: 10,
    padding: 10,
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
});
