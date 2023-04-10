import { Metrics } from "../../Metrics";
import {
    StyleSheet,
} from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: Metrics.measure(30),
      flexDirection: "column",
    },
    appBar: {
      backgroundColor: "white",
      width: "100%",
      height: Metrics.measure(75),
      justifyContent: "center",
      alignItems: "center",
      borderBottomColor: "black",
      borderBottomWidth: 1,
    },
    filterTextClicked: {
      flexDirection: "row-reverse",
      fontSize: Metrics.measure(15),
      textAlign: "left",
      fontWeight: "bold",
      color: "#CA4528",
      textDecorationLine: "underline",
    },
    appBarText: {
      color: "black",
      fontSize: Metrics.measure(25),
      fontWeight: "bold",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginVertical: Metrics.measure(10),
      paddingLeft: Metrics.measure(20),
    },
    checkBox: {
      marginRight: Metrics.measure(50),
    },
    column: {
      flexDirection: "column",
      paddingRight: Metrics.measure(20),
    },
    textInput: {
      height: Metrics.measure(50),
      marginTop: Metrics.measure(20),
      marginLeft: Metrics.measure(30),
      padding: Metrics.measure(10),
      width: Metrics.measure(300),
      borderRadius: Metrics.measure(15),
      backgroundColor: "#E4EFED",
    },
    button: {
      backgroundColor: "#447970",
      color: "white",
      height: Metrics.measure(45),
      marginTop: Metrics.measure(20),
      marginLeft: Metrics.measure(30),
      width: Metrics.measure(300),
      justifyContent: "center",
      alignItems: "center",
      borderRadius: Metrics.measure(15),
    },
    buttonText: {
      color: "white",
      fontSize: Metrics.measure(20),
      fontWeight: "bold",
      textAlign: "center",
    },
    divider: {
      borderBottomColor: "black",
      borderBottomWidth: 1,
      width: Metrics.measure(370),
      marginTop: Metrics.measure(10),
    },
    item: {
      paddingLeft: Metrics.measure(15),
      fontSize: Metrics.measure(15),
      fontWeight: "bold",
    },
    filterView: {
      alignItems: "flex-end",
      paddingRight: Metrics.measure(15),
    },
    filterText: {
      flexDirection: "row-reverse",
      fontSize: Metrics.measure(15),
      textAlign: "left",
      fontWeight: "bold",
      color: "#43736A",
      textDecorationLine: "underline",
    },
  
    sortingText: {
      fontSize: Metrics.measure(15),
      textAlign: "left",
      fontWeight: "bold",
      color: "#43736A",
      paddingLeft: Metrics.measure(14),
    },
    sortingButtonView: {
      flexDirection: "row",
      paddingRight: Metrics.measure(5),
    },
    sortingButton: {
      borderColor: "#447970",
      borderBottomWidth: 1,
  
      //backgroundColor: "#447970",
      color: "white",
      height: Metrics.measure(30),
      width: Metrics.measure(60),
      borderRadius: Metrics.measure(12),
      marginRight: Metrics.measure(8),
    },
    sortingButtonText: {
      //color: "white",
      fontSize: Metrics.measure(13),
      textAlign: "center",
      margin: Metrics.measure(6),
    },
    notesText: {
      fontSize: Metrics.measure(18),
      textAlign: "left",
      fontWeight: "bold",
      color: "#000000",
      padding: Metrics.measure(10),
      paddingLeft: Metrics.measure(35),
    },
  });
  export default styles;