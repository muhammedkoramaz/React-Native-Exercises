import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import CoinList from "./src/components/ListItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Show Me The Coin</Text>
        <Text style={styles.headerTextTime}>04/04/2023, 17:03:48 PM</Text>
        <Text style={{ position: "absolute", left: 10 }}>Left</Text>
        {/* position absolute yapınca view içindeki verilen tüm pozisyoınları ezip tamamen kendimiz el ile pozisyon veriyoruz. */}
        <Text style={{ position: "absolute", right: 10 }}>Right</Text>
      </View>
      <CoinList></CoinList>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
// inline style yapmak yerine styleSheet kullanmak daha iyi bir yöntemdir.
// Boyutlar responsive olması için ekran boyutuna göre ayarlanmalıdır.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    backgroundColor: "#FFB4B4",
  },
  header: {
    backgroundColor: "#FFB4B4",
    width: "100%",
    height: 70,
    justifyContent: "center",
  },
  headerText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
  },
  headerTextTime: {
    textAlign: "center",
    fontSize: 9,
  },
});
