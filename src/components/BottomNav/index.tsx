import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Gs } from "../../../assets/styles/GlobalStyle";
import { colors } from "../../../assets/styles/Colors";

export default function BottomNav(): JSX.Element {
  return (
    <View
      style={[Gs.flexRow, Gs.justifyBetween, Gs.itemsCenter, styles.container]}
    >
      <View>
        <TouchableOpacity style={styles.discoverContainer}>
          <Image
            style={styles.imageMargin}
            source={require("../../../assets/icons/discover.png")}
          />
          <Text style={styles.discoverText}>Discover</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image source={require("../../../assets/icons/messages.png")} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../../../assets/icons/payment.png")} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={require("../../../assets/icons/settings.png")} />
      </TouchableOpacity>
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
    ...Gs.cornerMD,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: colors.secondary,
  },
  discoverText: {
    ...Gs.font600,
    color: colors.primary,
  },
});
