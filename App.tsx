import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Details from "./src/screens/Details";
import Booking from "./src/screens/Booking";
import Checkout from "./src/screens/Checkout";
import Success from "./src/screens/Success";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Booking" component={Booking} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="Success" component={Success} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
