import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import { Metrics } from "../metrics/Metrics";
import { Product } from "../types/Type";
import { useNavigation } from "@react-navigation/native";
import useProducts from "../services/GetProducts";

const CategoriesScreen = () => {
  const { productInfo } = useProducts();
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    setAllProducts(productInfo);
    // Ürünlerdeki kategorileri kategoriler dizisine aktar
    const allCategories = productInfo.map((product) => product.category);
    const uniqueCategories = Array.from(new Set(allCategories));
    setCategories(uniqueCategories);
  }, [productInfo]);

  return (
    <View>
    <Header title="Kategoriler" />
    <FlatList
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      data={categories}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.categoriesContainer}
          onPress={() =>{
            navigation.navigate("CategoriesProductScreen", { categoryname: item });
          }
          }
        >
          <Text style={styles.categoriesTxt}>{item.toUpperCase()}</Text>
        </TouchableOpacity>
      )}
    />
    </View>
  );
};

export default CategoriesScreen;
const styles = StyleSheet.create({
  flatList: {
    alignSelf: "center",
  },
  categoriesContainer: {
    backgroundColor: "white",
    height: Metrics.measure(30),
    width: Metrics.measure(330),
    borderRadius: Metrics.measure(10),
    margin: Metrics.measure(5),
  },
  categoriesTxt: {
    fontSize: Metrics.measure(14),
    fontWeight: "bold",
    color: "black",
    left: Metrics.measure(10),
    top: Metrics.measure(4),
  },
});
