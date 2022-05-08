import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { Base, Typography } from './styles';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from "./components/Home.tsx";
import Pick from "./components/Pick.tsx";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import products from "./models/products";

const Tab = createBottomTabNavigator();

export default function App() {
    const [products, setProducts] = useState([]);
  return (
    <SafeAreaView style={Base.container1.container}>
      <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName = routeIcons[route.name] || "alert";

      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'blue',
    tabBarInactiveTintColor: 'gray',
  })}
>
  <Tab.Screen name="Lager">
    {() => <Home products={products} setProducts={setProducts} />}
    </Tab.Screen>
  <Tab.Screen name="Plock" component={Pick} />
</Tab.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


const routeIcons = {
  "Lager": "home-outline",
  "Plock": "md-list-circle-outline",
};
