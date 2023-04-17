import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import { Metrics } from "../metrics/Metrics";
import { Product } from "../types/Type";
import { RootStackParamList } from "../navigator/MainStackNavigator"
import { StackScreenProps } from "@react-navigation/stack"
import { useNavigation } from "@react-navigation/native";
import useProducts from "../services/GetProducts";

const CategoriesProductScreen = (props: StackScreenProps<RootStackParamList, 'CategoriesProductScreen'>) => {
  const { productInfo } = useProducts();
  const [allProducts, setAllProducts] = useState<Product[]>(productInfo);
  useEffect(() => {
    setAllProducts(productInfo);
  }, [productInfo]);
  const navigation = useNavigation();
  const category = props.route.params.categoryname;
  console.log(category);
 
  return (
    <View>
            <Header title={category.toLocaleUpperCase()}/>
    <FlatList
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      data={allProducts.filter((item) => item.category === category)}
      renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('ProductDetails', { product: item })}>
            <View style={styles.productContainer}>
              <Image style={styles.image} source={{ uri: item.thumbnail }} />
              <Text style={styles.productTitle}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.priceTitle}> TL</Text>
              <Text style={styles.brand}>{item.brand}</Text>
            </View>
            </TouchableOpacity>
          );
        } 
        }
      
      keyExtractor={(item) => item.id.toString()}
    />
    </View>

  );
}
export default CategoriesProductScreen;
const styles = StyleSheet.create({
  flatList: {
    alignSelf: "center",
    left: Metrics.measure(20),
    width: "100%",
    height: "100%",
    //top: Metrics.measure(60),
  },
  productContainer: {
    backgroundColor: "white",
    width: Metrics.measure(320),
    height: Metrics.measure(210),
    borderRadius: Metrics.measure(10),
    marginVertical: Metrics.measure(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  image: {
    position: "absolute",

    width: Metrics.measure(320),
    height: Metrics.measure(150),
    top: Metrics.measure(-10),
    borderTopLeftRadius: Metrics.measure(10),
    borderTopRightRadius: Metrics.measure(10),
    marginVertical: Metrics.measure(10),
    resizeMode: "contain",
  },
  productTitle: {
    position: "absolute",
    top: Metrics.measure(158),
    left: Metrics.measure(10),
    fontSize: 20,
    fontWeight: "bold",
  },
  brand: {
    position: "absolute",
    top: Metrics.measure(180),
    left: Metrics.measure(10),
    fontSize: Metrics.measure(15),
    fontWeight: "300",
  },
  price: {
    position: "absolute",
    top: Metrics.measure(155),
    right: Metrics.measure(30),
    fontSize: Metrics.measure(36),
    fontWeight: "bold",
    color: "#3E22EA",
  },
  priceTitle: {
    position: "absolute",
    top: Metrics.measure(180),
    right: Metrics.measure(10),
    fontSize: Metrics.measure(15),
    fontWeight: "bold",
    color: "#3E22EA",
  },
  fav: {
    position: "absolute",
    top: Metrics.measure(10),
    right: Metrics.measure(10),
    width: Metrics.measure(30),
    height: Metrics.measure(30),
    borderRadius: Metrics.measure(50),

    backgroundColor: "lightgrey",
    alignItems: "center",
    zIndex: 1,
    justifyContent: "center",
  },

});
