import CategoriesProductScreen from "../screens/CategoriesProductScreen";
import CategoriesScreen from "../screens/CategoriesScreen";
import { Product } from "../types/Type";
import ProductDetails from "../screens/ProductDetails";
import TabNavigator from "./TabNavigator";
import { createStackNavigator } from "@react-navigation/stack";

export type RootStackParamList = {
  CategoriesProductScreen: {
    categoryname: string;
  };
  Products: undefined;
  Categories: undefined;
  ProductDetails: {
    product: Product;
  };
};

const MainStack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Tabs" component={TabNavigator} />
      <MainStack.Screen name="ProductDetails" component={ProductDetails} />
      <MainStack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <MainStack.Screen
        name="CategoriesProductScreen"
        component={CategoriesProductScreen}
      />
    </MainStack.Navigator>
  );
};
export default MainStackNavigator;
