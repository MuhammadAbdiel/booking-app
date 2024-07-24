import { StyleSheet, Text, View } from "react-native";

export default function Success(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Success</Text>
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
