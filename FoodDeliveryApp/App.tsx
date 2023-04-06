import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import CheckBox from "expo-checkbox";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function App() {
  const [portion, setPortion] = useState(1);
  const [check, setCheck] = useState(false);
  const [text, setText] = useState("");

  const OrderConsole = () => {
    Alert.alert(
      "Siparişiniz Alınmıştır",
      "\nPorsiyon Adedi: " +
        portion +
        "\nİçerik: " +
        (check ? "Soğanlı" : "Soğansız") +
        "\nNot: " +
        text
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>YEMEK SİPARİŞİ</Text>
      </View>
      <View style={styles.row}>
        <Text>Porsiyon</Text>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={() => {
              setPortion(portion - 1);
            }}
          >
            <Text style={styles.textBorder}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textBorder}>{portion}</Text>
          <TouchableOpacity
            onPress={() => {
              setPortion(portion + 1);
            }}
          >
            <Text style={styles.textBorder}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <Text>Soğanlı Olsun Mu?</Text>
        <CheckBox style={styles.checkBox} value={check} onValueChange={setCheck} />
      </View>
      <View style={styles.column}>
        <Text>Not</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text: string) => {
            setText(text);
          }}
          value={text}
          placeholder="Notunuzu giriniz..."
        />
      </View>
      <TouchableOpacity onPress={() => OrderConsole()} style={styles.button}>
        <Text style={styles.buttonText}>SİPARİŞİ TAMAMLA</Text>
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
