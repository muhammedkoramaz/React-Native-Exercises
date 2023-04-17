import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import AllProduct from "../components/Products";
import Favourites from "../components/FavoriteProducts";
import Header from "../components/Header";
import { Metrics } from "../metrics/Metrics";
import { Product } from "../types/Type";
import TabButton from "../components/TabButton";

const ProductsScreen = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);
  const [isProduct, setIsProduct] = useState(true);

  const handleProduct = () => {
    setIsProduct(!isProduct);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Ürünler" />
      <TabButton
        style={[
          styles.allBtn,
          { backgroundColor: isProduct ? "#3E22EA" : "white" },
        ]}
        title="Tümünü Göster"
        titleStyle={[
          styles.titleStyle,
          { color: isProduct ? "white" : "black" },
        ]}
        onPress={() => handleProduct()}
      />
      <TabButton
        style={[
          styles.favouriteBtn,
          { backgroundColor: !isProduct ? "#3E22EA" : "white" },
        ]}
        title="Favorileri Göster"
        titleStyle={[
          styles.titleStyle,
          { color: !isProduct ? "white" : "black" },
        ]}
        onPress={() => handleProduct()}
      />
      {isProduct ? (
        <AllProduct
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          favoriteProducts={favoriteProducts}
          setFavoriteProducts={setFavoriteProducts}
        />
      ) : (
        <Favourites
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          favoriteProducts={favoriteProducts}
          setFavoriteProducts={setFavoriteProducts}
        />
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E7EAED",
    alignItems: "center",
  },
  allBtn: {
    position: "absolute",
    width: "40%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 9,
    borderBottomLeftRadius: 9,
    top: Metrics.measure(100),
    left: Metrics.measure(42),
  },
  favouriteBtn: {
    position: "absolute",
    width: "40%",
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 9,
    borderBottomRightRadius: 9,
    top: Metrics.measure(100),
    right: Metrics.measure(42),
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: "400",
  },
});

export default ProductsScreen;
