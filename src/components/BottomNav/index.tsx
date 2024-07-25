import { Image, StyleSheet, Text, View } from "react-native";
import { Gs } from "../../../assets/styles/GlobalStyle";
import { colors } from "../../../assets/styles/Colors";

export default function BottomNav(): JSX.Element {
  return (
    <View
      style={[Gs.flexRow, Gs.justifyCenter, Gs.itemsCenter, styles.container]}
    >
      <View style={styles.discoverContainer}>
        <Image
          style={styles.imageMargin}
          source={require("../../../assets/icons/discover.png")}
        />
        <Text style={styles.discoverText}>Discover</Text>
      </View>
      <Image source={require("../../../assets/icons/messages.png")} />
      <Image source={require("../../../assets/icons/payment.png")} />
      <Image source={require("../../../assets/icons/settings.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    paddingHorizontal: 54,
  },
  imageMargin: {
    marginRight: 8,
  },
  discoverContainer: {
    ...Gs.flexRow,
    ...Gs.font600,
    ...Gs.cornerMD,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: colors.secondary,
  },
  discoverText: {
    color: colors.primary,
  },
});
