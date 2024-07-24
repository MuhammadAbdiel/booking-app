import { StyleSheet, Text, View } from "react-native";

export default function Booking(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Booking</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
