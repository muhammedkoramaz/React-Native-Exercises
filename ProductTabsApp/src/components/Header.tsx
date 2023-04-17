import { StyleSheet, Text, View } from "react-native";

import { Metrics } from "../metrics/Metrics";
import React from "react";

type HeaderProps = {
    title: string;
};

const Header = (props:HeaderProps) => {
    const { title } = props;
  return (
    <View style={styles.headContainer}>
      <Text style={styles.headerTxt}>{title}</Text>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  headContainer: {
    backgroundColor: "white",
    height: Metrics.measure(80),
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  headerTxt: {
    top: Metrics.measure(10),
    fontSize: Metrics.measure(20),
    fontWeight:"bold",
    color:"#3E22EA"
  },
});