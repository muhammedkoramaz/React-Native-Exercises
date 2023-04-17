import CategoriesScreen from "../screens/CategoriesScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Product } from "../types/Type";
import ProductsScreen from "../screens/ProductsScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  Categories: {
    category: string;
  };
  Products: {
    item: Product;
  };
  Details: { product: Product };
  CategoriesProduct: {
    name: string;
  };
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Products" component={ProductsScreen} options={{tabBarIcon(props) {
        return <Ionicons name="pricetags-outline" size={props.size} color={props.color} />;
      },}}/>
      <Tab.Screen name="Categories" component={CategoriesScreen} options={{tabBarIcon(props) {
        return <Ionicons name="copy-outline" size={props.size} color={props.color} />;
      },}} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
