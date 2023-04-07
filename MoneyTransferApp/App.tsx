import {
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
  const [check, setCheck] = useState(false);
  const [accountNo, setAccountNo] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarText}>PARA GÖNDER</Text>
      </View>
      <View style={styles.column}>
        <View style={styles.row}>
          <Text>Başka Hesaba?</Text>
          <CheckBox
            style={styles.checkBox}
            value={check}
            onValueChange={setCheck}
          />
        </View>
        <TextInput
          keyboardType="numeric"
          style={styles.textInput}
          onChangeText={(quantity: string) => {
            setQuantity(quantity);
          }}
          value={quantity}
          placeholder="Miktar giriniz..."
        />
        {check && (
          <TextInput
            keyboardType="numeric"
            style={styles.textInput}
            onChangeText={(accountNo: string) => {
              setAccountNo(accountNo);
            }}
            value={accountNo}
            placeholder="Hesap No giriniz..."
          />
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log(
            (check ? accountNo + " No'lu hesaba " : "Kendi hesabına ") +
              quantity +
              " TL gönderildi."
          );
        }}
      >
        <Text style={styles.buttonText}>PARA GÖNDER</Text>
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
});
