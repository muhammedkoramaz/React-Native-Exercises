import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const coinListData = [
  {
    id: 1,
    name: "Bitcoin",
    volume: 1232412343,
    price: 10713.2312,
    icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/btc@2x.png",
  },
  {
    id: 2,
    name: "Etherium",
    volume: 1232412343,
    price: 10713.2312,
    icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/eth@2x.png",
  },
  {
    id: 3,
    name: "XRP",
    volume: 1232412343,
    price: 10713.2312,
    icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/xrp@2x.png",
  },
  {
    id: 4,
    name: "Litecoin",
    volume: 1232412343,
    price: 10713.2312,
    icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/ltc@2x.png",
  },
  {
    id: 5,
    name: "Bitcoin Cash",
    volume: 1232412343,
    price: 10713.2312,
    icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/bch@2x.png",
  },
  {
    id: 6,
    name: "Tether",
    volume: 1232412343,
    price: 10713.2312,
    icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/usdt@2x.png",
  },
  {
    id: 7,
    name: "EOS",
    volume: 1232412343,
    price: 10713.2312,
    icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/eos@2x.png",
  },
  {
    id: 8,
    name: "Binance Coin",
    volume: 1232412343,
    price: 10713.2312,
    icon: "https://cdn.jsdelivr.net/gh/atomiclabs/cryptocurrency-icons@1a63530be6e374711a8554f31b17e4cb92c25fa5/32@2x/color/bnb@2x.png",
  },
];

const CoinList = () => {
  const _renderItem = ({
    item,
  }: {
    item: {
      id: number;
      name: string;
      volume: number;
      price: number;
      icon: string;
    };
  }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={{ flexDirection: "row" }}>
          {/* <View style={styles.logo}></View> */}
          <Image source={{ uri: item.icon }} style={styles.logo} />
          <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {item.name}
            </Text>
            <Text style={{ opacity: 0.5 }}>Volume: {item.volume}</Text>
            <Text style={{ paddingTop: 5, fontSize: 13, fontWeight: "bold" }}>
              $: {item.price}
            </Text>
          </View>
        </View>
        <Text style={styles.idStyle}>#{item.id}</Text>
      </View>
    );
  };

  return (
    <FlatList
      ItemSeparatorComponent={ItemSeparatorView}
      data={coinListData}
      renderItem={_renderItem}
    />
  );
};
const ItemSeparatorView = () => {
  return (
    //Item Separator
    <View style={{ height: 0.7, width: "100%", backgroundColor: "#C8C8C8" }} />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 14,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginRight: 10,
  },
  idStyle: {
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default CoinList;
//export default ismi ile dosya ismi aynı olacak.