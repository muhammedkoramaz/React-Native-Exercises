import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Product, ProductListProps } from "../types/Type";
import React, { useEffect, useState } from "react";

import { FontAwesome } from "@expo/vector-icons";
import { Metrics } from "../metrics/Metrics";
import { useNavigation } from "@react-navigation/native";
import useProducts from "../services/GetProducts";

const AllProduct = (props: ProductListProps) => {
  const { productInfo } = useProducts();
  const { favoriteProducts = [], setFavoriteProducts } = props;
  const navigation = useNavigation();

  const [allProducts, setAllProducts] = useState<Product[]>(productInfo);
  useEffect(() => {
    setAllProducts(productInfo);
  }, [productInfo]);

  const isFavorite = (product: Product) => {
    return favoriteProducts.some((fav) => fav.id === product.id);
  };

  const handleFavoritePress = (product: Product) => {
    const updatedFavorites = isFavorite(product)
      ? favoriteProducts.filter((fav) => fav.id !== product.id)
      : [...favoriteProducts, product];

    if (setFavoriteProducts) {
      setFavoriteProducts(updatedFavorites);
    }
  };

  return (
    <FlatList
      style={styles.flatList}
      showsVerticalScrollIndicator={false}
      data={allProducts}
      renderItem={({ item }) => (
        <View style={styles.productContainer}>
          <TouchableOpacity
            style={styles.productContainer}
            onPress={() => {
              navigation.navigate("ProductDetails", { product: item });
            }}
          >
            <TouchableOpacity
              style={styles.fav}
              onPress={() => handleFavoritePress(item)}
            >
              <FontAwesome
                name="heart"
                size={22}
                color={isFavorite(item) ? "red" : "white"}
              />
            </TouchableOpacity>

            <Image style={styles.image} source={{ uri: item.thumbnail }} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <Text style={styles.priceTitle}> TL</Text>

            <Text style={styles.brand}>{item.brand}</Text>
          </TouchableOpacity>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default AllProduct;
const styles = StyleSheet.create({
  flatList: {
    alignSelf: "center",
    left: Metrics.measure(20),
    width: "100%",
    height: "100%",
    top: Metrics.measure(60),
  },
  productContainer: {
    backgroundColor: "white",
    width: Metrics.measure(320),
    height: Metrics.measure(210),
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginVertical: 10,
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
    fontSize: 15,
    fontWeight: "300",
  },
  price: {
    position: "absolute",
    top: Metrics.measure(165),
    right: Metrics.measure(30),
    fontSize: 30,
    fontWeight: "bold",
    color: "#3E22EA",
  },
  priceTitle: {
    position: "absolute",
    top: Metrics.measure(180),
    right: Metrics.measure(10),
    fontSize: 15,
    fontWeight: "bold",
    color: "#3E22EA",
  },
  fav: {
    position: "absolute",
    top: Metrics.measure(10),
    right: Metrics.measure(10),
    width: Metrics.measure(30),
    height: Metrics.measure(30),
    borderRadius: 50,

    backgroundColor: "lightgrey",
    alignItems: "center",
    zIndex: 1,
    justifyContent: "center",
  },
});
